export const metadata = {
  title: "特定商取引法に基づく表記",
};

export default function LegalPage() {
  return (
    <section className="py-16 md:py-24 px-5">
      <div className="mx-auto max-w-3xl">
        <p className="text-primary text-[13px] font-medium tracking-wide mb-3">── Legal</p>
        <h1 className="font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold mb-10">
          特定商取引法に基づく表記
        </h1>

        <div className="text-[14px] leading-[2]">
          <table className="w-full">
            <tbody className="divide-y divide-border-light">
              {[
                { label: "販売事業者", value: "※ 事業者名を記載してください" },
                { label: "運営責任者", value: "※ 氏名を記載してください" },
                { label: "所在地", value: "※ 住所を記載してください\n（請求があった場合に遅滞なく開示します）" },
                { label: "電話番号", value: "※ 電話番号を記載してください\n（請求があった場合に遅滞なく開示します）" },
                { label: "メールアドレス", value: "tomokiskriiiabc@gmail.com" },
                { label: "販売価格", value: "月額 20,000円（税込）" },
                { label: "支払方法", value: "クレジットカード\n（Visa / Mastercard / JCB / American Express）" },
                { label: "支払時期", value: "初回登録時（30日間の無料トライアル後に課金開始）\n以降、毎月自動更新" },
                { label: "商品の引渡し時期", value: "登録完了後、即時にサービスをご利用いただけます" },
                { label: "返品・キャンセル", value: "デジタルコンテンツの性質上、\n購入後の返品・返金はお受けしておりません。\nただし、無料トライアル期間中の解約は\nいつでも可能です。" },
                { label: "解約方法", value: "マイページの設定画面からいつでも解約できます。\n解約後も、現在の課金期間の終了まで\nサービスをご利用いただけます。" },
                { label: "動作環境", value: "Google Chrome / Safari / Firefox / Edge\nの最新版を推奨" },
              ].map(({ label, value }) => (
                <tr key={label}>
                  <td className="py-4 pr-6 text-muted align-top whitespace-nowrap w-[140px] md:w-[180px]">
                    {label}
                  </td>
                  <td className="py-4 text-foreground whitespace-pre-line">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-[12px] text-muted/60 pt-6 mt-6 border-t border-border-light">
            制定日: 2026年4月10日
          </p>
        </div>
      </div>
    </section>
  );
}
