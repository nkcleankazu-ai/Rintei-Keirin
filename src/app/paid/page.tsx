
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Prediction = {
  id: number;
  title: string;
  race_name: string | null;
  race_date: string | null;
  coin_cost: number;
};

export default function PaidPage() {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();

  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [purchasedContent, setPurchasedContent] = useState("");

  useEffect(() => {
    let active = true;

    async function load() {
      const { data: { user }, error: authError } =
        await supabase.auth.getUser();

      if (!active) return;

      if (authError || !user) {
        router.replace("/login");
        return;
      }

      const [{ data: profile }, { data: items, error }] = await Promise.all([
        supabase
          .from("profiles")
          .select("coin_balance")
          .eq("id", user.id)
          .single(),
        supabase.rpc("get_paid_predictions"),
      ]);

      if (!active) return;

      if (profile) setBalance(profile.coin_balance);
      if (!error && items) setPredictions(items);
      if (error) setMessage("有料予想を読み込めませんでした。");

      setLoading(false);
    }

    load();

    return () => {
      active = false;
    };
  }, [router, supabase]);

  async function buy(id: number) {
    const { data: { user }, error: authError } =
      await supabase.auth.getUser();

    if (authError || !user) {
      router.replace("/login");
      return;
    }

    setBusyId(id);
    setMessage("");
    setPurchasedContent("");

    const { data, error } = await supabase.rpc("purchase_prediction", {
      p_prediction_id: id,
    });

    setBusyId(null);

    if (error) {
      setMessage(
        error.message.includes("コインが不足")
          ? "コインが不足しています。"
          : "購入できませんでした。もう一度お試しください。"
      );
      return;
    }

    if (!data?.success) {
      setMessage("購入できませんでした。");
      return;
    }

    setPurchasedContent(data.content ?? "");
    setMessage("購入できました。予想内容を表示します。");

    const { data: profile } = await supabase
      .from("profiles")
      .select("coin_balance")
      .eq("id", user.id)
      .single();

    if (profile) setBalance(profile.coin_balance);
  }

  if (loading) {
    return (
      <main style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#d5ad55",
        display: "grid",
        placeItems: "center"
      }}>
        認証確認中...
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: 22 }}>
      <div style={{ maxWidth: 750, margin: "auto" }}>
        <Link href="/member" style={{ color: "#d5ad55" }}>
          ← 会員ページへ戻る
        </Link>

        <h1 style={{ textAlign: "center", color: "#d5ad55", marginTop: 40, letterSpacing: 4 }}>
          PAID PREDICTION
        </h1>
        <p style={{ textAlign: "center", color: "#999" }}>有料予想</p>

        <section style={{ background: "#12100c", border: "1px solid #514126", padding: 20, marginTop: 25, textAlign: "center" }}>
          <p style={{ color: "#999" }}>現在の保有コイン</p>
          <strong style={{ color: "#d5ad55", fontSize: 30 }}>
            {balance === null ? "---" : balance.toLocaleString()} COINS
          </strong>
        </section>

        {predictions.length === 0 ? (
          <p style={{ textAlign: "center", color: "#aaa", marginTop: 35 }}>
            現在公開中の有料予想はありません。
          </p>
        ) : (
          predictions.map((item) => (
            <article key={item.id} style={{ border: "1px solid #514126", background: "#12100c", padding: 20, marginTop: 18 }}>
              <p style={{ color: "#d5ad55", fontSize: 12 }}>
                {item.race_date || "開催日未設定"}
              </p>
              <h2 style={{ color: "#d5ad55" }}>{item.title}</h2>
              <p style={{ color: "#aaa" }}>{item.race_name}</p>
              <p style={{ fontSize: 20 }}>
                {item.coin_cost.toLocaleString()} コイン
              </p>
              <button
                onClick={() => buy(item.id)}
                disabled={busyId !== null}
                style={{ width: "100%", padding: 15, background: "#d5ad55", color: "#080808", border: 0, fontWeight: "bold" }}
              >
                {busyId === item.id ? "購入処理中..." : "コインを使って購入"}
              </button>
            </article>
          ))
        )}

        {message && (
          <p style={{ color: "#d5ad55", marginTop: 20 }}>{message}</p>
        )}

        {purchasedContent && (
          <section style={{ border: "1px solid #d5ad55", padding: 20, marginTop: 20 }}>
            <h2 style={{ color: "#d5ad55" }}>購入した予想内容</h2>
            <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.9 }}>
              {purchasedContent}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
