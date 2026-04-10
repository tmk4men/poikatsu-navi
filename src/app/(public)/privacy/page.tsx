export const metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 px-5">
      <div className="mx-auto max-w-3xl">
        <p className="text-primary text-[13px] font-medium tracking-wide mb-3">── Privacy Policy</p>
        <h1 className="font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold mb-10">
          プライバシーポリシー
        </h1>

        <div className="text-[14px] text-muted leading-[2] space-y-8">
          <p>
            ポイ活ナビ（以下「当サイト」）は、
            ユーザーの個人情報の取り扱いについて、
            以下のとおりプライバシーポリシーを定めます。
          </p>

          <div>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">1. 収集する情報</h2>
            <p>当サイトでは、以下の情報を収集することがあります。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>メールアドレス（アカウント登録時）</li>
              <li>表示名（任意入力）</li>
              <li>お支払い情報（Stripe経由で処理。当サイトにカード情報は保存されません）</li>
              <li>アクセスログ（IPアドレス、ブラウザ情報、アクセス日時等）</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">2. 利用目的</h2>
            <p>収集した情報は、以下の目的で利用します。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>サービスの提供・運営</li>
              <li>ユーザーの認証・アカウント管理</li>
              <li>サブスクリプションの決済処理</li>
              <li>サービスの改善・新機能の開発</li>
              <li>お問い合わせへの対応</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">3. 第三者への提供</h2>
            <p>
              当サイトは、法令に基づく場合を除き、
              ユーザーの同意なく個人情報を第三者に提供することはありません。
              ただし、以下のサービスを利用しており、
              各サービスのプライバシーポリシーに従い情報が処理されます。
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Supabase（認証・データベース）</li>
              <li>Stripe（決済処理）</li>
              <li>Vercel（ホスティング）</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">4. Cookieの使用</h2>
            <p>
              当サイトでは、ユーザーの認証状態を維持するために
              Cookieを使用しています。
              ブラウザの設定でCookieを無効にすることも可能ですが、
              一部の機能が利用できなくなる場合があります。
            </p>
          </div>

          <div>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">5. セキュリティ</h2>
            <p>
              当サイトは、個人情報の漏洩・紛失・改ざんを防止するため、
              適切なセキュリティ対策を講じています。
              通信はSSL/TLSにより暗号化されています。
            </p>
          </div>

          <div>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">6. ポリシーの変更</h2>
            <p>
              本ポリシーの内容は、法令の変更やサービス内容の変更に伴い、
              事前の通知なく変更されることがあります。
              変更後のポリシーは、当ページに掲載した時点で効力を生じます。
            </p>
          </div>

          <div>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">7. お問い合わせ</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、
              以下までご連絡ください。
            </p>
            <p className="mt-2 text-foreground">
              メール: tomokiskriiiabc@gmail.com
            </p>
          </div>

          <p className="text-[12px] text-muted/60 pt-4 border-t border-border-light">
            制定日: 2026年4月10日
          </p>
        </div>
      </div>
    </section>
  );
}
