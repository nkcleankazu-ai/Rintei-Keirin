
"use client";

import Link from "next/link";

const plans = [
  { name: "BASIC", coins: 100, price: 1100 },
  { name: "STANDARD", coins: 500, price: 5500 },
  { name: "PREMIUM", coins: 1000, price: 11000 },
  { name: "VIP", coins: 3000, price: 30000 },
];

export default function CoinsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: 22 }}>
      <div style={{ maxWidth: 760, margin: "auto" }}>
        <Link href="/member" style={{ color: "#d5ad55" }}>
          ← 会員ページへ戻る
        </Link>

        <h1 style={{ textAlign: "center", color: "#d5ad55", letterSpacing: 4, marginTop: 38 }}>
          COIN SHOP
        </h1>

        <p style={{ textAlign: "center", color: "#aaa" }}>コイン追加購入</p>

        <p style={{ textAlign: "center", color: "#aaa", lineHeight: 1.8 }}>
          ご希望のコインプランをお選びください。決済機能は現在準備中です。
        </p>

        <div style={{ display: "grid", gap: 16, marginTop: 30 }}>
          {plans.map((plan, index) => (
            <section key={plan.name} style={{
              border: "1px solid #8b713b",
              background: index === 3 ? "#211b10" : "#12100c",
              padding: 22,
              textAlign: "center"
            }}>
              <p style={{ color: "#d5ad55", letterSpacing: 3, fontWeight: 900 }}>
                {plan.name}
              </p>
              <p style={{ color: "#f5f0e5", fontSize: 30, fontWeight: 900, margin: "8px 0" }}>
                {plan.coins.toLocaleString()} COINS
              </p>
              <p style={{ color: "#d5ad55", fontSize: 25, fontWeight: 900, margin: "8px 0 18px" }}>
                ¥{plan.price.toLocaleString()} <span style={{ fontSize: 12 }}>税込</span>
              </p>
              <button disabled style={{
                width: "100%",
                padding: 14,
                border: 0,
                background: "#514b3d",
                color: "#ddd",
                fontWeight: 700,
                opacity: 0.8
              }}>
                決済準備中
              </button>
            </section>
          ))}
        </div>

        <p style={{ color: "#888", fontSize: 12, lineHeight: 1.8, marginTop: 24 }}>
          ※決済完了が確認された場合のみコインを付与します。
          決済機能の公開前に、購入条件・返金条件をご案内します。
        </p>
      </div>
    </main>
  );
}
