import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-5 py-16">
      <div className="text-center max-w-md">
        {/* 404 number */}
        <p className="font-serif text-[clamp(5rem,15vw,8rem)] font-bold text-border leading-none mb-4">
          404
        </p>

        <h1 className="font-serif text-xl font-bold mb-3">
          ページが見つかりません
        </h1>

        <p className="text-sm text-muted leading-relaxed mb-8">
          お探しのページは移動または
          <br className="sm:hidden" />
          削除された可能性があります。
          <br />
          URLをご確認いただくか、
          <br className="sm:hidden" />
          トップページからお探しください。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/">トップページへ</Button>
          <Button href="/guides" variant="outline">
            ガイドを見る
          </Button>
        </div>
      </div>
    </section>
  );
}
