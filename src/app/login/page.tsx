export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] px-5 text-white">
      <section className="w-full max-w-md rounded-xl border border-[#5a4728] bg-[#14120e] p-8">
        <a href="/" className="text-sm text-[#d6ad5b]">← トップへ戻る</a>
        <h1 className="mt-6 text-3xl font-black">輪帝 会員ログイン</h1>
        <p className="mt-3 text-sm text-gray-400">会員機能は今後接続予定です。</p>
        <form className="mt-8 space-y-4">
          <input type="email" placeholder="メールアドレス" className="w-full rounded border border-gray-700 bg-black p-3 text-white" />
          <input type="password" placeholder="パスワード" className="w-full rounded border border-gray-700 bg-black p-3 text-white" />
          <button type="button" className="w-full rounded bg-[#d6ad5b] p-3 font-bold text-black">
            ログイン（準備中）
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">新規会員登録機能は次の段階で実装します。</p>
      </section>
    </main>
  );
}
