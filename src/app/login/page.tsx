
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage("ログインできませんでした。メールアドレスとパスワードを確認してください。");
      return;
    }
router.replace("/member");
router.refresh();
    
  }

  async function handleSignup() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
  emailRedirectTo: `${window.location.origin}/member`,
},    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("登録を受け付けました。確認メールが届いた場合は、メール内のリンクを開いてください。");
  }

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: "25px 18px" }}>
      <div style={{ maxWidth: 430, margin: "auto" }}>
        <div style={{ textAlign: "right" }}>
          <Link href="/" style={{ color: "#d5ad55" }}>TOPへ戻る</Link>
        </div>

        <h1 style={{ textAlign: "center", color: "#d5ad55", marginTop: 65, letterSpacing: 4 }}>
          輪帝 RINTEI
        </h1>
        <h2 style={{ textAlign: "center", color: "#d5ad55", marginTop: 45 }}>
          MEMBER LOGIN
        </h2>
        <p style={{ textAlign: "center", color: "#999" }}>
          会員ログイン・新規登録
        </p>

        <section style={{ border: "1px solid #514126", background: "#12100c", padding: 25, marginTop: 30 }}>
          <label style={{ display: "block", color: "#d5ad55", marginBottom: 8 }}>メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="メールアドレス"
            style={{ width: "100%", padding: 14, background: "#080808", color: "white", border: "1px solid #514126" }}
          />

          <label style={{ display: "block", color: "#d5ad55", margin: "20px 0 8px" }}>パスワード（6文字以上）</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="パスワード"
            style={{ width: "100%", padding: 14, background: "#080808", color: "white", border: "1px solid #514126" }}
          />

          <button
            onClick={handleLogin}
            disabled={loading || !email || !password}
            style={{ width: "100%", padding: 15, marginTop: 25, background: "#d5ad55", border: 0, fontWeight: "bold" }}
          >
            {loading ? "処理中..." : "ログイン"}
          </button>

          <button
            onClick={handleSignup}
            disabled={loading || !email || password.length < 6}
            style={{ width: "100%", padding: 15, marginTop: 12, background: "#292319", color: "#d5ad55", border: "1px solid #514126" }}
          >
            新規会員登録
          </button>

          {message && (
            <p style={{ color: "#d5ad55", fontSize: 13, lineHeight: 1.8, marginTop: 20 }}>
              {message}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
