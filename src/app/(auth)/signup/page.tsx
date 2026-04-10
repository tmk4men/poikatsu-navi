"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/button";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="min-h-[65vh] flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="font-serif text-2xl font-bold mb-2">
            ポイ活を始めましょう
          </h1>
          <p className="text-sm text-muted">
            無料でガイドが読めます。
            <br />
            登録は30秒で完了します。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="displayName"
              className="block text-xs font-medium text-muted tracking-wide mb-1.5"
            >
              表示名
              <span className="text-muted/60 ml-1">（任意）</span>
            </label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-3 text-sm border border-border rounded-[var(--radius-md)] bg-surface transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="ニックネーム"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-muted tracking-wide mb-1.5"
            >
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 text-sm border border-border rounded-[var(--radius-md)] bg-surface transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium text-muted tracking-wide mb-1.5"
            >
              パスワード
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 text-sm border border-border rounded-[var(--radius-md)] bg-surface transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="6文字以上"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "登録中..." : "無料で登録する"}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-muted">
          すでにアカウントをお持ちの方は{" "}
          <Link
            href="/login"
            className="text-primary font-medium hover:underline underline-offset-2"
          >
            ログイン
          </Link>
        </p>
      </div>
    </div>
  );
}
