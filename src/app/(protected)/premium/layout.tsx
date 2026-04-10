import { redirect } from "next/navigation";
import { getSubscription, isSubscriptionActive } from "@/lib/stripe/helpers";

export default async function PremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subscription = await getSubscription();

  if (!isSubscriptionActive(subscription)) {
    redirect("/pricing?upgrade=true");
  }

  return <>{children}</>;
}
