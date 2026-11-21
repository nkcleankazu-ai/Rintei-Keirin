import Link from "next/link";

const races = [
  { time: "12:00 公開予定", title: "本日の注目レース 01", status: "サンプル予想", mark: "無料公開" },
  { time: "15:00 公開予定", title: "本日の注目レース 02", status: "サンプル予想", mark: "無料公開" },
];

export default function FreePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: "25px 18px" }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #080808; }
        a { text-decoration: none; }
        .free-wrap { max-width: 850px; margin: auto; }
        .free-logo { color: #d5ad55; font-size: 23px; font-weight: 900; letter-spacing: 4px; }
        .free-title { text-align: center; color: #d5ad55; font-size: 32px; letter-spacing: 5px; margin: 65px 0 12px; }
        .free-sub { text-align: center; color: #aaa293; font-size: 13px; margin-bottom: 35px; }
        .free-card { border: 1px solid #514126; background: #12100c; padding: 23px; margin: 16px 0; }
        .free-tag { display: inline-block; color: #080808; background: #d5ad55; padding: 5px 10px; font-size: 11px; font-weight: bold; }
        .free-card h2 { font-size: 20px; margin: 18px 0 8px; }
        .free-muted { color: #aaa293; font-size: 13px; line-height: 1.9; }
        .free-button { display: inline-block; color: #d5ad55; border: 1px solid #806633; padding: 11px 18px; margin-top: 12px; font-size: 13px; }
        .free-notice { border: 1px solid #493d29; padding: 18px; color: #aaa293; font-size: 12px; line-height: 1.9; margin-top: 28px; }
      `}</style>

      <div className="free-wrap">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #292319", paddingBottom: 18 }}>
          <div className="free-logo">輪帝 <span style={{ fontSize: 11 }}>RINTEI</span></div>
          <Link href="/" style={{ color: "#d5ad55", fontSize: 13 }}>TOPへ戻る</Link>
        </header>

        <h1 className="free-title">FREE PREDICTION</h1>
        <p className="free-sub">無料予想｜本日の注目レース</p>

        {races.map((race, index) => (
          <section className="free-card" key={race.title}>
            <span className="free-tag">{race.mark}</span>
            <h2>{race.title}</h2>
            <p className="free-muted">{race.time}</p>
            <p className="free-muted">{race.status}</p>
            <p className="free-muted">
              レース情報・出走表・ライン構成を確認のうえ、予想を公開します。
            </p>
            <div style={{ color: "#d5ad55", fontSize: 13, marginTop: 15 }}>
              {index === 0 ? "12:00 更新枠" : "15:00 更新枠"}
            </div>
          </section>
        ))}

        <div className="free-notice">
          ※現在表示している内容はページ見本です。実際の開催情報・予想・結果ではありません。実際のレース情報を確認してから公開します。
        </div>

        <div style={{ textAlign: "center", padding: "35px 0" }}>
          <Link href="/paid" className="free-button">有料予想を見る →</Link>
        </div>
      </div>
    </main>
  );
}
