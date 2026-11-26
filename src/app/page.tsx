
export default function Home() {
  const links = [
    { label: "無料予想", href: "/free" },
    { label: "有料予想", href: "/paid" },
    { label: "会員ページ", href: "/member" },
    { label: "ログイン・新規登録", href: "/login" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      color: "#f5f0e5",
      padding: "12px",
    }}>
      <nav style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        maxWidth: 750,
        margin: "0 auto 12px",
      }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              display: "block",
              textAlign: "center",
              padding: "15px 8px",
              background: "#17130c",
              border: "1px solid #d5ad55",
              color: "#d5ad55",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: 5,
            }}
          >
            {link.label} →
          </a>
        ))}
      </nav>

      <div style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "84.041%",
        overflow: "hidden",
      }}>
        <iframe
          loading="eager"
          title="輪帝 RINTEI"
          src="https://www.canva.com/design/DAHbOQS6ULs/MGDS_umjaaIYtOdy5DnbYA/view?embed"
          allowFullScreen
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: 0,
          }}
        />
      </div>
    </main>
  );
}
