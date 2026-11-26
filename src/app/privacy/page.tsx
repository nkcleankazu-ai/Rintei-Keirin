export const metadata = {
  title: "プライバシーポリシー",
  description: "輪帝 RINTEIにおける個人情報の取り扱いについて。",
};

export default function PrivacyPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      color: "#f5f0e5",
      padding: "28px 18px",
      lineHeight: 1.9,
    }}>
      <div style={{ maxWidth: 750, margin: "auto" }}>
        <a href="/" style={{ color: "#d5ad55" }}>← TOPへ戻る</a>

        <h1 style={{
          color: "#d5ad55",
          textAlign: "center",
          marginTop: 40,
        }}>
          プライバシーポリシー
        </h1>

        <p>
          輪帝 RINTEI（以下「当サービス」）は、利用者の個人情報を
          適切に取り扱うため、以下の方針を定めます。
        </p>

        <h2 style={{ color: "#d5ad55", marginTop: 30 }}>1. 取得する情報</h2>
        <p>
          当サービスは、会員登録やお問い合わせなどの際に、
          メールアドレス、アカウント情報、お問い合わせ内容、
          決済やコイン購入に関する情報を取得する場合があります。
        </p>

        <h2 style={{ color: "#d5ad55", marginTop: 30 }}>2. 利用目的</h2>
        <ul>
          <li>会員登録および本人確認</li>
          <li>サービスの提供・運営・改善</li>
          <li>コイン購入や決済状況の確認</li>
          <li>お問い合わせへの対応</li>
          <li>重要なお知らせの連絡</li>
          <li>不正利用の防止および安全性の確保</li>
        </ul>

        <h2 style={{ color: "#d5ad55", marginTop: 30 }}>3. 第三者提供</h2>
        <p>
          法令に基づく場合などを除き、本人の同意なく個人情報を
          第三者に提供しません。ただし、決済処理やサービス運営に必要な
          業務委託先に情報を提供する場合があります。
        </p>

        <h2 style={{ color: "#d5ad55", marginTop: 30 }}>4. 外部サービスの利用</h2>
        <p>
          当サービスでは、認証、データ保存、決済などのために
          外部サービスを利用する場合があります。
          各サービスにおける情報の取り扱いは、それぞれの提供事業者の
          プライバシーポリシーもご確認ください。
        </p>

        <h2 style={{ color: "#d5ad55", marginTop: 30 }}>5. 安全管理</h2>
        <p>
          個人情報への不正アクセス、漏えい、紛失、改ざんなどを防ぐため、
          必要かつ適切な安全管理に努めます。
        </p>

        <h2 style={{ color: "#d5ad55", marginTop: 30 }}>6. 開示・訂正・削除</h2>
        <p>
          利用者本人から個人情報の開示、訂正、利用停止または削除の
          申し出があった場合、法令に従い適切に対応します。
        </p>

        <h2 style={{ color: "#d5ad55", marginTop: 30 }}>7. ポリシーの変更</h2>
        <p>
          本ポリシーは、法令の改正やサービス内容の変更に応じて
          改定することがあります。変更後の内容は当サービス上に掲載します。
        </p>

        <p style={{ color: "#999", marginTop: 45, fontSize: 13 }}>
          輪帝 RINTEI
        </p>
      </div>
    </main>
  );
}
