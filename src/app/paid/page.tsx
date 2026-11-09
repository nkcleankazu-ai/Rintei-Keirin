const plans = [
  { coins: 150, name: "スタンダード予想", description: "気軽に楽しむ予想" },
  { coins: 500, name: "プレミアム予想", description: "詳細な分析予想" },
  { coins: 1000, name: "スペシャル予想", description: "厳選された特別予想" },
];

export default function PaidPage() {
  return (
    <main className="min-h-screen bg-[#090909] px-5 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-[#d6ad5b]">← 輪帝トップ</a>
        <p className="mt-8 text-sm tracking-widest text-[#d6ad5b]">PREMIUM</p>
        <h1 className="mt-3 text-4xl font-black">有料AI予想</h1>
        <p className="mt-4 text-gray-400">コインを使って予想を購入</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <section key={plan.coins} className="rounded-xl border border-[#5a4728] bg-[#14120e] p-6 text-center">
              <h2 className="text-lg font-bold">{plan.name}</h2>
              <p className="mt-5 text-4xl font-black text-[#d6ad5b]">{plan.coins}</p>
              <p className="text-sm text-gray-400">コイン</p>
              <p className="mt-4 text-sm">{plan.description}</p>
              <a href="/login" className="mt-6 block rounded bg-[#d6ad5b] px-4 py-3 font-bold text-black">
                ログインして購入
              </a>
            </section>
          ))}
        </div>
        <p className="mt-8 text-xs text-gray-500">※購入・決済機能は今後接続します。現在は画面サンプルです。</p>
      </div>
    </main>
  );
}
