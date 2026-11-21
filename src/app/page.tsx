import Link from "next/link";

const gold = "#d5ad55";

const services = [
  {
    number: "01",
    title: "無料予想",
    description: "毎日公開。輪帝の予想を無料でチェック。",
    href: "/free",
  },
  {
    number: "02",
    title: "有料予想",
    description: "コインを使って勝負の予想を購入。",
    href: "/paid",
  },
  {
    number: "03",
    title: "会員ページ",
    description: "会員情報や保有コインを確認。",
    href: "/member",
  },
];

export default function Home() {
  return (
    <main style={{ background: "#080808", color: "#f5f0e5", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #080808; }
        a { text-decoration: none; }
        .rintei-wrap { max-width: 1100px; margin: auto; padding: 0 22px; }
        .rintei-nav { display:flex; justify-content:space-between; align-items:center; padding:22px 0; border-bottom:1px solid #292319; }
        .rintei-logo { color:#d5ad55; font-size:25px; font-weight:900; letter-spacing:5px; }
        .rintei-hero { text-align:center; padding:95px 10px 85px; }
        .rintei-hero h1 { color:#d5ad55; font-size:clamp(42px, 9vw, 78px); letter-spacing:9px; margin:20px 0; }
        .rintei-hero p { color:#c9c0ae; line-height:2; }
        .rintei-button { display:inline-block; padding:15px 35px; background:#d5ad55; color:#080808; font-weight:800; border-radius:3px; margin-top:22px; }
        .rintei-section { padding:55px 0; }
        .rintei-heading { text-align:center; color:#d5ad55; letter-spacing:4px; font-size:25px; margin-bottom:12px; }
        .rintei-sub { text-align:center; color:#8f887b; font-size:13px; margin-bottom:35px; }
        .rintei-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; }
        .rintei-card { display:block; border:1px solid #514126; padding:27px 22px; background:linear-gradient(145deg,#17140f,#0c0c0c); color:#f5f0e5; }
        .rintei-card strong { color:#d5ad55; font-size:13px; letter-spacing:2px; }
        .rintei-card h3 { font-size:22px; margin:17px 0 10px; }
        .rintei-card p { color:#aaa293; font-size:13px; line-height:1.9; }
        .rintei-price { text-align:center; border:1px solid #514126; padding:35px 15px; background:#100e0a; }
        .rintei-price b { display:block; color:#d5ad55; font-size:38px; margin:12px 0; }
        .rintei-footer { text-align:center; border-top:1px solid #292319; padding:30px 10px; color:#777; font-size:12px; line-height:2; }
        @media(max-width:600px) {
          .rintei-nav { gap:10px; }
          .rintei-logo { font-size:20px; }
          .rintei-hero { padding:70px 5px; }
        }
      `}</style>

      <div className="rintei-wrap">
        <header className="rintei-nav">
          <div className="rintei-logo">輪帝 <span style={{ fontSize: 12 }}>RINTEI</span></div>
          <Link href="/login" style={{ color: gold, border: "1px solid #806633", padding: "9px 16px", fontSize: 13 }}>
            LOGIN
          </Link>
        </header>

        <section className="rintei-hero">
          <div style={{ color: gold, letterSpacing: 5, fontSize: 12 }}>KEIRIN PREDICTION SERVICE</div>
          <h1>輪 帝</h1>
          <p style={{ fontSize: 17, letterSpacing: 2 }}>
            勝負を制する、輪の力。
          </p>
          <p>
            展開を読み、勝負を見極める。<br />
            競輪予想情報をあなたの手に。
          </p>
          <Link href="/free" className="rintei-button">
            無料予想を見る
          </Link>
        </section>

        <section className="rintei-section">
          <h2 className="rintei-heading">CONTENTS</h2>
          <p className="rintei-sub">輪帝のサービス</p>
          <div className="rintei-grid">
            {services.map((item) => (
              <Link href={item.href} className="rintei-card" key={item.number}>
                <strong>{item.number} / RINTEI</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span style={{ color: gold, fontSize: 13 }}>詳しく見る　→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rintei-section">
          <h2 className="rintei-heading">MEMBERSHIP</h2>
          <p className="rintei-sub">輪帝 月額会員プラン</p>
          <div className="rintei-price">
            <div style={{ color: "#c9c0ae" }}>STANDARD MEMBERSHIP</div>
            <b>¥1,980<span style={{ fontSize: 14 }}> / 月（税込）</span></b>
            <p style={{ color: "#aaa293", lineHeight: 2 }}>
              毎月200コイン付与<br />
              未使用コインは翌月へ繰り越し
            </p>
            <Link href="/login" className="rintei-button">
              会員登録・ログイン
            </Link>
          </div>
        </section>

        <section className="rintei-section" style={{ textAlign: "center" }}>
          <h2 className="rintei-heading">RINTEI</h2>
          <p style={{ color: "#aaa293", lineHeight: 2 }}>
            一つひとつのレースに、読みと戦略を。<br />
            輪帝があなたの勝負をサポートします。
          </p>
        </section>

        <footer className="rintei-footer">
          <div style={{ color: gold, letterSpacing: 4, fontSize: 18 }}>輪帝 RINTEI</div>
          <p>勝負を制する、輪の力。</p>
          © 2026 RINTEI. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}
