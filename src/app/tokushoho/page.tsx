export default function TokushohoPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">
        特定商取引法に基づく表記
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="font-bold">販売事業者</h2>
          <p>事業者名：未設定</p>
        </section>

        <section>
          <h2 className="font-bold">運営責任者</h2>
          <p>未設定</p>
        </section>

        <section>
          <h2 className="font-bold">所在地</h2>
          <p>請求があった場合、遅滞なく開示いたします。</p>
        </section>

        <section>
          <h2 className="font-bold">電話番号</h2>
          <p>請求があった場合、遅滞なく開示いたします。</p>
        </section>

        <section>
          <h2 className="font-bold">メールアドレス</h2>
          <p>未設定</p>
        </section>

        <section>
          <h2 className="font-bold">販売価格</h2>
          <p>各サービス・購入画面に表示された金額（税込）</p>
        </section>

        <section>
          <h2 className="font-bold">商品代金以外の必要料金</h2>
          <p>インターネット接続料金および通信料金は、お客様のご負担となります。</p>
        </section>

        <section>
          <h2 className="font-bold">支払方法</h2>
          <p>未設定（決済画面に表示します）</p>
        </section>

        <section>
          <h2 className="font-bold">支払時期</h2>
          <p>購入手続き時にお支払いいただきます。</p>
        </section>

        <section>
          <h2 className="font-bold">サービス提供時期</h2>
          <p>決済完了後、利用可能となります。</p>
        </section>

        <section>
          <h2 className="font-bold">返品・キャンセルについて</h2>
          <p>
            デジタルサービスの性質上、購入後のお客様都合による返金・キャンセルは原則としてお受けしておりません。
            ただし、法令上必要な場合や当社に責任がある場合はこの限りではありません。
          </p>
        </section>
      </div>
    </main>
  );
}
