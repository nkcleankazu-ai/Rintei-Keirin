import Link from "next/link";

export default function LoginPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: "25px 18px" }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #080808; }
        .login-wrap { max-width: 430px; margin: auto; }
        .login-logo { text-align: center; color: #d5ad55; font-size: 25px; font-weight: 900; letter-spacing: 5px; margin-top: 65px; }
        .login-title { text-align: center; color: #d5ad55; font-size: 25px; letter-spacing: 4px; margin: 45px 0 10px; }
        .login-sub { text-align: center; color: #999; font-size: 12px; margin-bottom: 35px; }
        .login-box { border: 1px solid #514126; background: #12100c; padding: 25px; }
        .login-label { display: block; color: #d5ad55; font-size: 12px; margin: 18px 0 8px; }
        .login-input { width: 100%; background: #080808; color: white; border: 1px solid #514126; padding: 14px; font-size: 15px; border-radius: 2px; }
        .login-button { width: 100%; display: block; border: 0; background: #d5ad55; color: #080808; padding: 15px; font-weight: bold; margin-top: 25px; font-size: 14px; }
        .login-notice { color: #999; font-size: 11px; line-height: 1.8; text-align: center; margin-top: 22px; }
      `}</style>

      <div className="login-wrap">
        <div style={{ textAlign: "right" }}>
          <Link href="/" style={{ color: "#d5ad55", fontSize: 13 }}>TOPへ戻る</Link>
        </div>

        <div className="login-logo">輪帝 RINTEI</div>
        <h1 className="login-title">MEMBER LOGIN</h1>
        <p className="login-sub">会員ログイン・新規登録</p>

        <section className="login-box">
          <label className="login-label" htmlFor="email">メールアドレス</label>
          <input className="login-input" id="email" type="email" placeholder="メールアドレス" />

          <label className="login-label" htmlFor="password">パスワード</label>
          <input className="login-input" id="password" type="password" placeholder="パスワード" />

          <button className="login-button" type="button" disabled style={{ opacity: 0.6 }}>
            ログイン機能準備中
          </button>

          <button className="login-button" type="button" disabled style={{ opacity: 0.6, background: "#292319", color: "#d5ad55" }}>
            新規会員登録機能準備中
          </button>
        </section>

        <p className="login-notice">
          現在は画面見本です。アカウント登録・ログインはまだ利用できません。認証システム接続後に公開します。
        </p>
      </div>
    </main>
  );
}
