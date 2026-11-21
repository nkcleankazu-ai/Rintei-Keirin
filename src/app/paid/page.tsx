import Link from "next/link";

const plans = [
  { coins: "150", name: "STANDARD", description: "注目レースの予想" },
  { coins: "500", name: "PREMIUM", description: "勝負レースの予想" },
  { coins: "1,000", name: "SPECIAL", description: "厳選レースの特別予想" },
];

export default function PaidPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: "25px 18px" }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #080808; }
        a { text-decoration: none; }
        .paid-wrap { max-width: 850px; margin: auto; }
        .paid-logo { color: #d5ad55; font-size: 23px; font-weight: 900; letter-spacing: 4px; }
        .paid-title { text-align: center; color: #d5ad55; font-size: 32px; letter-spacing: 5px; margin: 65px 0 12px; }
        .paid-sub { text-align: center; color: #aaa293; font-size: 13px; margin-bottom: 35px; }
        .paid-card { border: 1px solid #514126; background: linear-gradient(145deg,#17140f,#0c0c0c); padding: 25px; margin: 17px 0; text-align: center; }
        .paid-name { color: #d5ad55; font-size: 12px; letter-spacing: 3px; }
        .paid-coins { font-size: 38px; font-weight: 900; margin: 18px 0 8px; color: #f5f0e5; }
        .paid-description { color: #aaa293; font-size: 13px; }
        .paid-button { display: inline-block; color: #d5ad55; border: 1px solid #806633; padding: 11px 22px; margin-top: 18px; font-size: 13px; }
        .paid-notice { border: 1px solid #493d29; padding: 18px; color: #aaa293; font-size: 12px; line-height: 1.9; margin-top: 28px; }
      `}</style>

      <div className="paid-wrap">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #292319", paddingBottom: 18 }}>
          <div className="paid-logo">輪帝 <span style={{ fontSize: 11 }}>RINTEI</span></div>
          <Link href="/" style={{ color: "#d5ad55", fontSize: 13 }}>TOPへ戻る</Link>
        </header>

        <h1 className="paid-title">PAID PREDICTION</h1>
        <p className="paid-sub">有料予想｜コインで購入</p>

        {plans.map((plan) => (
          <section className="paid-card" key={plan.coins}>
            <div className="paid-name">{plan.name}</div>
            <div className="paid-coins">{plan.coins} <span style={{ fontSize: 15, color: "#d5ad55" }}>COINS</span></div>
            <p className="paid-description">{plan.description}</p>
            <div style={{ color: "#8f887b", fontSize: 12, marginTop: 12 }}>
              予想内容は公開前に実際のレース情報を確認します。
            </div>
            <span className="paid-button">購入機能準備中</span>
          </section>
        ))}

        <section className="paid-card" style={{ marginTop: 35 }}>
          <div className="paid-name">MONTHLY MEMBERSHIP</div>
          <h2 style={{ color: "#d5ad55" }}>月額会員プラン</h2>
          <div className="paid-coins">¥1,980<span style={{ fontSize: 14 }}> / 月（税込）</span></div>
          <p className="paid-description">
            毎月200コイン付与<br />
            未使用コインは翌月へ繰り越し
          </p>
          <Link href="/login" className="paid-button">会員登録・ログイン</Link>
        </section>

        <div className="paid-notice">
          ※現在は表示見本です。コイン購入・決済・予想閲覧の制御はまだ接続されていません。実際の販売開始前に、利用条件・料金・返金条件などを整備します。
        </div>

        <div style={{ textAlign: "center", padding: "30px 0" }}>
          <Link href="/free" style={{ color: "#d5ad55", fontSize: 13 }}>← 無料予想へ戻る</Link>
        </div>
      </div>
    </main>
  );
}
