export default function FreePage() {
  return (
    <main className="min-h-screen bg-[#090909] px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-[#d6ad5b]">← 輪帝トップ</a>
        <p className="mt-8 text-sm tracking-widest text-[#d6ad5b]">FREE AI PREDICTION</p>
        <h1 className="mt-3 text-4xl font-black">無料AI予想</h1>
        <p className="mt-4 text-gray-400">毎日12時ごろ・15時ごろに公開予定</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {["12:00ごろ", "15:00ごろ"].map((time) => (
            <section key={time} className="rounded-xl border border-[#5a4728] bg-[#14120e] p-6">
              <p className="text-[#d6ad5b]">{time}</p>
              <h2 className="mt-3 text-2xl font-bold">無料予想 1〜2レース</h2>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                当日の出走表・選手情報を確認後、AIが条件の良いレースを選定します。
              </p>
              <div className="mt-5 rounded-lg bg-black p-4 text-center text-sm text-gray-500">
                予想データ準備中
              </div>
            </section>
          ))}
        </div>
        <p className="mt-8 text-xs text-gray-500">※実際の予想データが未連携のため、現在は表示枠のみです。</p>
      </div>
    </main>
  );
}
