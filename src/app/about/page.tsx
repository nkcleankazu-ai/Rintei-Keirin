export const metadata = {
  title: "輪帝とは",
  description:
    "輪帝 RINTEIは、競輪のレース展開やライン構成を分析し、予想情報を提供するサービスです。",
};

export default function AboutPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      color: "#f5f0e5",
      padding: "28px 18px",
      lineHeight: 1.9,
    }}>
      <div style={{ maxWidth: 750, margin: "auto" }}>
        <a href="/" style={{ color: "#d5ad55" }}>← TOPへ戻る</a>

        <h1 style={{
          color: "#d5ad55",
          textAlign: "center",
          marginTop: 45,
          letterSpacing: 4,
        }}>
          輪帝 RINTEI
        </h1>

        <p style={{ textAlign: "center", color: "#d5ad55" }}>
          勝負を制する、輪の力。
        </p>

        <h2 style={{ color: "#d5ad55", marginTop: 45 }}>
          輪帝とは
        </h2>
        <p>
          輪帝 RINTEIは、競輪のレース展開や選手のライン構成、
          競走場の特徴などをもとに、レース予想情報を提供するサービスです。
        </p>

        <h2 style={{ color: "#d5ad55", marginTop: 35 }}>
          提供サービス
        </h2>
        <ul>
          <li>無料競輪予想</li>
          <li>有料競輪予想</li>
          <li>レース展開・ライン構成の分析情報</li>
          <li>会員向けコインサービス</li>
        </ul>

        <h2 style={{ color: "#d5ad55", marginTop: 35 }}>
          ご利用にあたって
        </h2>
        <p>
          競輪は公営競技であり、予想は的中や利益を保証するものではありません。
          車券の購入はご自身の判断と責任で行ってください。
        </p>

        <p style={{ marginTop: 45, color: "#999", fontSize: 13 }}>
          輪帝 RINTEI
        </p>
      </div>
    </main>
  );
}
