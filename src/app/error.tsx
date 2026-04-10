"use client";

import Button from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-5 py-16">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-danger"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>

        <h1 className="font-serif text-xl font-bold mb-3">
          エラーが発生しました
        </h1>

        <p className="text-sm text-muted leading-relaxed mb-8">
          申し訳ありません。
          <br />
          予期しないエラーが発生しました。
          <br />
          もう一度お試しいただくか、
          <br className="sm:hidden" />
          しばらく時間をおいてアクセスしてください。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => reset()}>もう一度試す</Button>
          <Button href="/" variant="outline">
            トップページへ
          </Button>
        </div>
      </div>
    </section>
  );
}
