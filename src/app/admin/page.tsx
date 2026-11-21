import Link from "next/link";

const items = [
  { title: "予想管理", description: "無料予想・有料予想の登録と公開管理" },
  { title: "会員管理", description: "会員情報・登録状況の管理" },
  { title: "コイン管理", description: "コイン付与・利用履歴の管理" },
  { title: "売上管理", description: "月額会員・追加購入の売上確認" },
];

export default function AdminPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: "25px 18px" }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #080808; }
        .admin-wrap { max-width: 900px; margin: auto; }
        .admin-logo { color: #d5ad55; font-size: 23px; font-weight: 900; letter-spacing: 4px; }
        .admin-title { text-align: center; color: #d5ad55; font-size: 30px; letter-spacing: 5px; margin: 60px 0 10px; }
        .admin-sub { text-align: center; color: #aaa293; font-size: 13px; margin-bottom: 35px; }
        .admin-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 15px; }
        .admin-card { background: #12100c; border: 1px solid #514126; padding: 25px; }
        .admin-card h2 { color: #d5ad55; font-size: 19px; }
        .admin-card p { color: #aaa293; font-size: 13px; line-height: 1.8; }
        .admin-notice { border: 1px solid #493d29; padding: 18px; color: #aaa293; font-size: 12px; line-height: 1.9; margin-top: 28px; }
      `}</style>

      <div className="admin-wrap">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #292319", paddingBottom: 18 }}>
          <div className="admin-logo">輪帝 <span style={{ fontSize: 11 }}>RINTEI</span></div>
          <Link href="/" style={{ color: "#d5ad55", fontSize: 13 }}>TOPへ戻る</Link>
        </header>

        <h1 className="admin-title">ADMIN PANEL</h1>
        <p className="admin-sub">管理者専用ダッシュボード</p>

        <div className="admin-grid">
          {items.map((item) => (
            <section className="admin-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div style={{ color: "#806633", fontSize: 12 }}>機能接続準備中</div>
            </section>
          ))}
        </div>

        <div className="admin-notice">
          管理者画面のデザイン見本です。現在は認証・データベースに接続されていません。公開前に管理者本人だけがアクセスできる認証と権限設定を実装します。
        </div>
      </div>
    </main>
  );
}
