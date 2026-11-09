const links = [
  { href: "/free", title: "無料AI予想", description: "毎日12時・15時ごろ公開" },
  { href: "/paid", title: "有料AI予想", description: "150・500・1,000コイン" },
  { href: "/login", title: "会員ログイン", description: "輪帝メンバー入口" },
  { href: "/member", title: "マイページ", description: "コイン残高・購入履歴" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-[#40331d] bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="/" className="text-2xl font-black tracking-widest text-[#d6ad5b]">輪帝 <span className="text-xs text-gray-400">RINTEI</span></a>
          <a href="/login" className="rounded border border-[#d6ad5b] px-4 py-2 text-sm text-[#d6ad5b]">ログイン</a>
        </div>
      </header>

      <section className="border-b border-[#40331d] bg-[radial-gradient(ellipse_at_center,_rgba(160,115,35,0.18),_transparent_65%)] px-5 py-24 text-center">
        <p className="text-sm tracking-[0.4em] text-[#d6ad5b]">KEIRIN AI PREDICTION</p>
        <h1 className="mt-5 text-6xl font-black tracking-[0.2em] sm:text-8xl">輪帝</h1>
        <p className="mt-6 text-lg tracking-widest text-[#e4c783]">勝負を制する、輪の力。</p>
        <p className="mt-6 text-sm leading-7 text-gray-400">AI分析で競輪をもっと深く。<br/>無料予想からプレミアム予想まで。</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:grid-cols-2">
        {links.map((item) => (
          <a key={item.href} href={item.href} className="rounded-xl border border-[#5a4728] bg-[#14120e] p-7 transition hover:border-[#d6ad5b]">
            <h2 className="text-2xl font-bold text-[#d6ad5b]">{item.title} →</h2>
            <p className="mt-3 text-sm text-gray-400">{item.description}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-14 text-center">
        <h2 className="text-2xl font-bold">月額会員 ¥1,980</h2>
        <p className="mt-3 text-gray-400">毎月200コイン付与・未使用コイン繰り越し</p>
      </section>

      <footer className="border-t border-[#40331d] px-5 py-8 text-center text-xs leading-7 text-gray-500">
        輪帝 RINTEI｜勝負を制する、輪の力。<br/>
        予想は情報提供を目的とし、的中や利益を保証するものではありません。
      </footer>
    </main>
  );
}
