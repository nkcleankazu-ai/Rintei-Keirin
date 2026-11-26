
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const plans = [
  { name: "BASIC", coins: 100, price: 1100 },
  { name: "STANDARD", coins: 500, price: 5500 },
  { name: "PREMIUM", coins: 1000, price: 11000 },
  { name: "VIP", coins: 3000, price: 30000 },
];

export default function BankTransferPage() {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const [planIndex, setPlanIndex] = useState("0");
  const [transferName, setTransferName] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const plan = plans[Number(planIndex)];

  async function submitOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setBusy(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      setBusy(false);
      return;
    }

    const { error } = await supabase.from("bank_coin_orders").insert({
      user_id: user.id,
      plan_name: plan.name,
      coins: plan.coins,
      amount: plan.price,
      transfer_name: transferName.trim(),
      transfer_date: transferDate,
    });

    setBusy(false);
    if (error) {
      setMessage("申請できませんでした。ログイン状態と設定を確認してください。");
      return;
    }

    setMessage("振込申請を受け付けました。入金確認後に管理者がコインを付与します。");
    setTransferName("");
    setTransferDate("");
  }

  const bankName = process.env.NEXT_PUBLIC_BANK_NAME;
  const branchName = process.env.NEXT_PUBLIC_BANK_BRANCH;
  const accountType = process.env.NEXT_PUBLIC_BANK_ACCOUNT_TYPE;
  const accountNumber = process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER;
  const accountHolder = process.env.NEXT_PUBLIC_BANK_ACCOUNT_HOLDER;

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: 22 }}>
      <div style={{ maxWidth: 700, margin: "auto" }}>
        <Link href="/coins" style={{ color: "#d5ad55" }}>← コイン購入へ戻る</Link>
        <h1 style={{ textAlign: "center", color: "#d5ad55", letterSpacing: 3, marginTop: 35 }}>BANK TRANSFER</h1>
        <p style={{ textAlign: "center", color: "#aaa" }}>銀行振込でコインを購入</p>

        <section style={{ border: "1px solid #8b713b", background: "#12100c", padding: 18, marginTop: 24 }}>
          <h2 style={{ color: "#d5ad55", marginTop: 0 }}>振込先</h2>
          {bankName && branchName && accountType && accountNumber && accountHolder ? (
            <div style={{ lineHeight: 2 }}>
              <p>銀行名：{bankName}</p>
              <p>支店名：{branchName}</p>
              <p>口座種別：{accountType}</p>
              <p>口座番号：{accountNumber}</p>
              <p>口座名義：{accountHolder}</p>
            </div>
          ) : (
            <p style={{ color: "#e4c77e", lineHeight: 1.8 }}>
              振込先情報は現在設定中です。振込先が表示されるまでは送金しないでください。
            </p>
          )}
        </section>

        <form onSubmit={submitOrder} style={{ border: "1px solid #514126", background: "#12100c", padding: 18, marginTop: 20 }}>
          <h2 style={{ color: "#d5ad55", marginTop: 0 }}>振込申請</h2>
          <label>購入プラン</label>
          <select value={planIndex} onChange={e => setPlanIndex(e.target.value)} style={fieldStyle}>
            {plans.map((p, i) => (
              <option key={p.name} value={i}>
                {p.name}：{p.coins.toLocaleString()}コイン / ¥{p.price.toLocaleString()}
              </option>
            ))}
          </select>
          <p style={{ color: "#d5ad55", fontWeight: 700 }}>振込金額：¥{plan.price.toLocaleString()}（税込）</p>
          <label>振込名義（通帳に記載される名前）</label>
          <input required value={transferName} onChange={e => setTransferName(e.target.value)} placeholder="例：リンテイタロウ" style={fieldStyle} />
          <label>振込予定日</label>
          <input required type="date" value={transferDate} onChange={e => setTransferDate(e.target.value)} style={fieldStyle} />
          <button disabled={busy} type="submit" style={{ width: "100%", padding: 15, background: "#d5ad55", color: "#080808", border: 0, fontWeight: 800, opacity: busy ? 0.6 : 1 }}>
            {busy ? "送信中..." : "振込申請を送る"}
          </button>
          {message && <p style={{ color: "#e4c77e", lineHeight: 1.8, marginTop: 16 }}>{message}</p>}
        </form>
        <p style={{ color: "#888", fontSize: 12, lineHeight: 1.8, marginTop: 20 }}>
          ※申請だけではコインは付与されません。実際の入金を確認した後、管理者がコインを付与します。振込手数料はご利用者様負担となります。
        </p>
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
