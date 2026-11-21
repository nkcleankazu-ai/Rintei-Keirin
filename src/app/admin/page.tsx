
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Prediction = {
  id: number;
  title: string;
  race_name: string | null;
  race_date: string | null;
  content: string;
  coin_cost: number;
  is_published: boolean;
};

export default function AdminPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [title, setTitle] = useState("");
  const [raceName, setRaceName] = useState("");
  const [raceDate, setRaceDate] = useState("");
  const [content, setContent] = useState("");
  const [coinCost, setCoinCost] = useState("0");
  const [published, setPublished] = useState(false);
  const [message, setMessage] = useState("");

  async function loadPredictions() {
    const { data, error } = await supabase
      .from("predictions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("予想一覧を読み込めませんでした。");
      return;
    }

    setPredictions(data ?? []);
  }

  useEffect(() => {
    async function checkAdmin() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .single();

      if (error || !data?.is_admin) {
        setMessage("このアカウントには管理者権限がありません。");
        setChecking(false);
        return;
      }

      setIsAdmin(true);
      await loadPredictions();
      setChecking(false);
    }

    checkAdmin();
  }, [router, supabase]);

  async function addPrediction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const cost = Number(coinCost);

    if (!title.trim() || !content.trim() || !Number.isInteger(cost) || cost < 0) {
      setMessage("タイトル・予想内容・コイン数を確認してください。");
      return;
    }

    const { error } = await supabase.from("predictions").insert({
      title: title.trim(),
      race_name: raceName.trim() || null,
      race_date: raceDate || null,
      content: content.trim(),
      coin_cost: cost,
      is_published: published,
    });

    if (error) {
      setMessage("登録できませんでした。管理者権限や設定を確認してください。");
      return;
    }

    setTitle("");
    setRaceName("");
    setRaceDate("");
    setContent("");
    setCoinCost("0");
    setPublished(false);
    setMessage("予想を登録しました。");
    await loadPredictions();
  }

  if (checking) {
    return <main style={{ background: "#080808", color: "#d5ad55", minHeight: "100vh", padding: 30 }}>確認中...</main>;
  }

  if (!isAdmin) {
    return <main style={{ background: "#080808", color: "#f5f0e5", minHeight: "100vh", padding: 30 }}>
      <h1 style={{ color: "#d5ad55" }}>管理者ページ</h1>
      <p>{message}</p>
    </main>;
  }

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: 20 }}>
      <div style={{ maxWidth: 750, margin: "auto" }}>
        <h1 style={{ color: "#d5ad55", letterSpacing: 3 }}>輪帝 ADMIN</h1>
        <p style={{ color: "#999" }}>競輪予想管理</p>

        <form onSubmit={addPrediction} style={{ border: "1px solid #514126", background: "#12100c", padding: 20, marginTop: 25 }}>
          <h2 style={{ color: "#d5ad55" }}>予想を新規登録</h2>

          <label>予想タイトル</label>
          <input required value={title} onChange={e => setTitle(e.target.value)} placeholder="例：本日の注目レース" style={fieldStyle} />

          <label>競輪場・レース名</label>
          <input value={raceName} onChange={e => setRaceName(e.target.value)} placeholder="例：静岡競輪 10R" style={fieldStyle} />

          <label>開催日</label>
          <input type="date" value={raceDate} onChange={e => setRaceDate(e.target.value)} style={fieldStyle} />

          <label>予想内容</label>
          <textarea required value={content} onChange={e => setContent(e.target.value)} rows={8} placeholder="展開・買い目などを入力" style={{ ...fieldStyle, resize: "vertical" }} />

          <label>必要コイン数（無料は0）</label>
          <select value={coinCost} onChange={e => setCoinCost(e.target.value)} style={fieldStyle}>
            <option value="0">無料 0コイン</option>
            <option value="150">150コイン</option>
            <option value="500">500コイン</option>
            <option value="1000">1000コイン</option>
          </select>

          <label style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18 }}>
            <input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} />
            公開する
          </label>

          <button type="submit" style={{ width: "100%", padding: 15, marginTop: 22, background: "#d5ad55", color: "#080808", border: 0, fontWeight: "bold" }}>
            予想を登録する
          </button>
        </form>

        {message && <p style={{ color: "#d5ad55", marginTop: 18 }}>{message}</p>}

        <h2 style={{ color: "#d5ad55", marginTop: 35 }}>登録済み予想</h2>
        {predictions.map(item => (
          <section key={item.id} style={{ border: "1px solid #514126", padding: 15, marginTop: 12 }}>
            <strong>{item.title}</strong>
            <p style={{ color: "#aaa", fontSize: 13 }}>{item.race_name || "レース名未設定"} / {item.coin_cost}コイン</p>
            <p style={{ color: "#aaa", fontSize: 13 }}>{item.is_published ? "公開中" : "非公開"}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

const fieldStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: 13,
  margin: "8px 0 18px",
  background: "#080808",
  color: "white",
  border: "1px solid #514126",
};
