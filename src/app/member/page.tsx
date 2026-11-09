export default function MemberPage() {
  return (
    <main className="min-h-screen bg-[#090909] px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-[#d6ad5b]">← 輪帝トップ</a>
        <h1 className="mt-8 text-4xl font-black">マイページ</h1>
        <section className="mt-8 rounded-xl border border-[#5a4728] bg-[#14120e] p-7">
          <p className="text-gray-400">現在のコイン残高</p>
          <p className="mt-3 text-5xl font-black text-[#d6ad5b]">— <span className="text-lg">COINS</span></p>
          <p className="mt-4 text-sm text-gray-500">会員登録・コイン管理接続後に残高が表示されます。</p>
        </section>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#40331d] p-5">購入した予想<br/><span className="text-sm text-gray-500">購入履歴準備中</span></div>
          <div className="rounded-xl border border-[#40331d] p-5">コイン履歴<br/><span className="text-sm text-gray-500">入出金履歴準備中</span></div>
        </div>
      </div>
    </main>
  );
}
