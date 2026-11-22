
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Prediction = {
  id: number;
  title: string;
  race_name: string | null;
  race_date: string | null;
  content: string;
};

export default function FreePage() {
  const supabase = useMemo(() => createClient(), []);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPredictions() {
      const { data } = await supabase
        .from("predictions")
        .select("id, title, race_name, race_date, content")
        .eq("coin_cost", 0)
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      setPredictions(data ?? []);
      setLoading(false);
    }

    loadPredictions();
  }, [supabase]);

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: 22 }}>
      <div style={{ maxWidth: 750, margin: "auto" }}>
        <Link href="/" style={{ color: "#d5ad55" }}>← TOPへ戻る</Link>

        <h1 style={{ textAlign: "center", color: "#d5ad55", marginTop: 45, letterSpacing: 4 }}>
          FREE PREDICTION
        </h1>
        <p style={{ textAlign: "center", color: "#999" }}>
          輪帝 無料予想
        </p>

        {loading ? (
          <p style={{ textAlign: "center", marginTop: 40 }}>読み込み中...</p>
        ) : predictions.length === 0 ? (
          <p style={{ textAlign: "center", color: "#aaa", marginTop: 40 }}>
            現在公開中の無料予想はありません。
          </p>
        ) : (
          predictions.map((item) => (
            <article key={item.id} style={{ border: "1px solid #514126", background: "#12100c", padding: 22, marginTop: 20 }}>
              <p style={{ color: "#d5ad55", fontSize: 12 }}>
                {item.race_date || "開催日未設定"}　/　無料予想
              </p>
              <h2 style={{ color: "#d5ad55" }}>{item.title}</h2>
              <p style={{ color: "#aaa" }}>{item.race_name}</p>
              <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.9 }}>
                {item.content}
              </div>
            </article>
          ))
        )}

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/paid" style={{ color: "#d5ad55" }}>
            有料予想はこちら →
          </Link>
        </div>
      </div>
    </main>
  );
}
