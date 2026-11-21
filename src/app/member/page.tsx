import Link from "next/link";

export default function MemberPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: "25px 18px" }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #080808; }
        .member-wrap { max-width: 850px; margin: auto; }
        .member-logo { color: #d5ad55; font-size: 23px; font-weight: 900; letter-spacing: 4px; }
        .member-title { text-align: center; color: #d5ad55; font-size: 30px; letter-spacing: 5px; margin: 60px 0 10px; }
        .member-sub { text-align: center; color: #aaa293; font-size: 13px; margin-bottom: 35px; }
        .member-card { background: #12100c; border: 1px solid #514126; padding: 25px; margin: 16px 0; }
        .member-label { color: #aaa293; font-size: 12px; }
        .member-value { color: #d5ad55; font-size: 30px; font-weight: bold; margin-top: 12px; }
        .member-link { display: inline-block; border: 1px solid #806633; color: #d5ad55; padding: 12px 20px; margin: 8px; font-size: 13px; }
        .member-note { color: #999; font-size: 12px; line-height: 1.9; }
      `}</style>

      <div className="member-wrap">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #292319", paddingBottom: 18 }}>
          <div className="member-logo">輪帝 <span style={{ fontSize: 11 }}>RINTEI</span></div>
          <Link href="/" style={{ color: "#d5ad55", fontSize: 13 }}>TOPへ戻る</Link>
        </header>

        <h1 className="member-title">MY PAGE</h1>
        <p className="member-sub">会員専用ページ</p>

        <section className="member-card">
          <div className="member-label">保有コイン</div>
          <div className="member-value">--- COINS</div>
          <p className="member-note">ログイン・コイン管理機能の接続後に実際の残高を表示します。</p>
        </section>

        <section className="member-card">
          <div className="member-label">月額会員プラン</div>
          <h2 style={{ color: "#d5ad55", margin: "12px 0" }}>STANDARD MEMBER</h2>
          <div style={{ fontSize: 22, fontWeight: "bold" }}>¥1,980 / 月（税込）</div>
          <p className="member-note">毎月200コイン付与・未使用コインは翌月へ繰り越し予定</p>
          <p className="member-note">現在は会員状態を取得できません。</p>
        </section>

        <section className="member-card">
          <div className="member-label">購入履歴・利用履歴</div>
          <p className="member-note" style={{ marginTop: 18 }}>履歴はまだありません。決済・コイン管理機能の接続後に表示します。</p>
        </section>

        <div style={{ textAlign: "center", padding: "25px 0" }}>
          <Link href="/free" className="member-link">無料予想</Link>
          <Link href="/paid" className="member-link">有料予想</Link>
          <Link href="/login" className="member-link">ログイン</Link>
        </div>

        <p className="member-note" style={{ textAlign: "center" }}>
          ※現在は画面見本です。会員情報・残高・購入履歴は未接続です。
        </p>
      </div>
    </main>
  );
}
