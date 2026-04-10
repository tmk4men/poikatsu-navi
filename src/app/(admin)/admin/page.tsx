import { createClient } from "@/lib/supabase/server";
import Card from "@/components/ui/card";

export const metadata = {
  title: "管理画面",
};

export default async function AdminPage() {
  const supabase = await createClient();

  const { count: totalDeals } = await supabase
    .from("deals")
    .select("*", { count: "exact", head: true });

  const { count: pendingDeals } = await supabase
    .from("deals")
    .select("*", { count: "exact", head: true })
    .eq("is_approved", false);

  const { count: totalUsers } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });

  const { data: recentLogs } = await supabase
    .from("crawl_logs")
    .select("*")
    .order("started_at", { ascending: false })
    .limit(5);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-8">管理画面</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <p className="text-sm text-gray-600">総案件数</p>
          <p className="text-3xl font-bold">{totalDeals ?? 0}</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-600">未承認案件</p>
          <p className="text-3xl font-bold text-amber-600">{pendingDeals ?? 0}</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-600">ユーザー数</p>
          <p className="text-3xl font-bold">{totalUsers ?? 0}</p>
        </Card>
      </div>

      <Card>
        <h2 className="font-semibold mb-4">最近のクロールログ</h2>
        {!recentLogs || recentLogs.length === 0 ? (
          <p className="text-gray-500 text-sm">まだクロール履歴がありません。</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">サイト</th>
                  <th className="text-left py-2">ステータス</th>
                  <th className="text-left py-2">検出</th>
                  <th className="text-left py-2">新規</th>
                  <th className="text-left py-2">日時</th>
                </tr>
              </thead>
              <tbody>
                {recentLogs.map((log) => (
                  <tr key={log.id} className="border-b">
                    <td className="py-2">{log.site_slug}</td>
                    <td className="py-2">
                      <span className={log.status === "success" ? "text-green-600" : "text-red-600"}>
                        {log.status}
                      </span>
                    </td>
                    <td className="py-2">{log.deals_found}</td>
                    <td className="py-2">{log.deals_new}</td>
                    <td className="py-2">
                      {new Date(log.started_at).toLocaleString("ja-JP")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
