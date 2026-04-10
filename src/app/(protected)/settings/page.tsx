"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function SettingsPage() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  async function handleManageSubscription() {
    const res = await fetch("/api/stripe/portal", { method: "POST" });
    const { url } = await res.json();
    if (url) window.location.href = url;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-8">設定</h1>

      <div className="space-y-6">
        <Card>
          <h2 className="font-semibold mb-4">サブスクリプション</h2>
          <p className="text-sm text-gray-600 mb-4">
            プランの変更、支払い方法の更新、解約はこちらから。
          </p>
          <Button onClick={handleManageSubscription} variant="outline" size="sm">
            サブスクリプションを管理
          </Button>
        </Card>

        <Card>
          <h2 className="font-semibold mb-4">アカウント</h2>
          <Button onClick={handleLogout} variant="outline" size="sm">
            ログアウト
          </Button>
        </Card>
      </div>
    </div>
  );
}
