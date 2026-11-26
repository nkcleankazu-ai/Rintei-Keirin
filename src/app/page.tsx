
const links = [
  { label: "無料予想", href: "/free", description: "公開中の無料競輪予想を確認" },
  { label: "有料予想", href: "/paid", description: "詳細なレース予想を確認" },
  { label: "会員ページ", href: "/member", description: "会員情報・保有コインを確認" },
  { label: "ログイン・新規登録", href: "/login", description: "輪帝の会員登録・ログイン" },
];

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      color: "#f5f0e5",
      padding: "24px 16px",
    }}>
      <div style={{ maxWidth: 850, margin: "0 auto" }}>
        <header style={{ textAlign: "center", padding: "35px 10px" }}>
          <p style={{ color: "#d5ad55", letterSpacing: 5 }}>
            RINTEI
          </p>
          <h1 style={{
            color: "#d5ad55",
            fontSize: 38,
            letterSpacing: 8,
            margin: "12px 0",
          }}>
            輪帝
          </h1>
          <p style={{ fontSize: 17, letterSpacing: 2 }}>
            勝負を制する、輪の力。
          </p>
          <p style={{ color: "#aaa", lineHeight: 1.9 }}>
            競輪の展開を読み、勝負を見極める。
            <br />
            輪帝 RINTEI 競輪予想情報サービス
          </p>
        </header>

        <section style={{
          borderTop: "1px solid #80652e",
          borderBottom: "1px solid #80652e",
          padding: "28px 10px",
          lineHeight: 2,
        }}>
          <h2 style={{ color: "#d5ad55", fontSize: 22 }}>
            輪帝 RINTEI とは
          </h2>
          <p>
            輪帝 RINTEIは、競輪のレース展開やライン構成、
            選手の位置取りなどを分析し、競輪予想情報を提供するサービスです。
          </p>
          <p>
            レースごとの展開を見極め、無料予想・有料予想を通じて
            競輪をより深く楽しむための情報をお届けします。
          </p>
        </section>

        <section style={{ padding: "28px 0" }}>
          <h2 style={{
            color: "#d5ad55",
            textAlign: "center",
            fontSize: 22,
          }}>
            CONTENTS
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
            gap: 12,
          }}>
            {links.map((link) => (
              <a key={link.href} href={link.href} style={{
                display: "block",
                padding: 18,
                background: "#17130c",
                border: "1px solid #80652e",
                borderRadius: 5,
                color: "#d5ad55",
                textDecoration: "none",
                textAlign: "center",
              }}>
                <strong>{link.label}</strong>
                <p style={{
                  color: "#aaa",
                  fontSize: 12,
                  marginBottom: 0,
                }}>
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section style={{
          borderTop: "1px solid #80652e",
          padding: "28px 10px",
          lineHeight: 2,
        }}>
          <h2 style={{ color: "#d5ad55", fontSize: 22 }}>
            競輪予想・レース展開分析
          </h2>
          <p>
            ライン構成や選手同士の連携、レース展開を考慮し、
            3連単を中心とした予想情報を掲載します。
          </p>
          <p>
            無料予想と有料予想を用意しています。
            予想情報はレースごとにご確認ください。
          </p>
        </section>

        <footer style={{
          borderTop: "1px solid #333",
          padding: "22px 10px",
          textAlign: "center",
          color: "#888",
          fontSize: 12,
          lineHeight: 2,
        }}>
          <p>輪帝 RINTEI</p>
          <p>競輪予想情報サービス</p>
          <p>※予想は的中を保証するものではありません。</p>
        </footer>
      </div>
    </main>
  );
}
