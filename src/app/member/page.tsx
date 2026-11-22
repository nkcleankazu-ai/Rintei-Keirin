
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Profile = {
  display_name: string | null;
  coin_balance: number;
};

export default function MemberPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [message, setMessage] = useState("読み込み中...");

  useEffect(() => {
    let active = true;

    async function loadMember() {
      const { data: { session }, error } = await supabase.auth.getSession();
      const user = session?.user ?? null;

      if (!active) return;

      if (error || !user) {
        setMessage("ログイン状態を確認できません。ログインし直してください。");
        return;
      }

      setEmail(user.email ?? "");

      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("display_name, coin_balance")
        .eq("id", user.id)
        .maybeSingle();

      if (!active) return;

      if (profileError || !data) {
        setMessage("会員情報を読み込めませんでした。");
        return;
      }

      setProfile(data);
      setMessage("");
    }

    loadMember();

    return () => {
      active = false;
    };
  }, [supabase]);

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#f5f0e5", padding: 24 }}>
      <div style={{ maxWidth: 650, margin: "auto" }}>
        <div style={{ textAlign: "center", color: "#d5ad55", fontSize: 28, fontWeight: 900, letterSpacing: 5, marginTop: 30 }}>
          輪帝 RINTEI
        </div>

        <h1 style={{ color: "#d5ad55", textAlign: "center", marginTop: 45 }}>
          MEMBER PAGE
        </h1>

        {message && <p style={{ textAlign: "center" }}>{message}</p>}

        {profile && (
          <>
            <section style={{ border: "1px solid #514126", background: "#12100c", padding: 24, marginTop: 25 }}>
              <p style={{ color: "#999", fontSize: 12 }}>ログイン中のメールアドレス</p>
              <p>{email}</p>
              <p style={{ color: "#999", fontSize: 12, marginTop: 25 }}>会員名</p>
              <p>{profile.display_name || "会員"}</p>
              <p style={{ color: "#999", fontSize: 12, marginTop: 25 }}>保有コイン</p>
              <p style={{ color: "#d5ad55", fontSize: 34, fontWeight: 900 }}>
                {profile.coin_balance.toLocaleString()} COINS
              </p>
            </section>

            <div style={{ display: "grid", gap: 12, marginTop: 25 }}>
              <Link href="/free" style={{ padding: 16, textAlign: "center", background: "#292319", color: "#d5ad55", textDecoration: "none" }}>
                無料予想を見る
              </Link>
              <Link href="/paid" style={{ padding: 16, textAlign: "center", background: "#292319", color: "#d5ad55", textDecoration: "none" }}>
                有料予想・コイン購入
              </Link>
              <button onClick={logout} style={{ padding: 14, background: "#111", color: "white", border: "1px solid #514126" }}>
                ログアウト
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
