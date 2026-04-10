export interface Subscription {
  id: string;
  user_id: string;
  stripe_customer_id: string;
  stripe_price_id: string | null;
  status: "active" | "canceled" | "past_due" | "trialing" | "incomplete" | "incomplete_expired" | "unpaid" | "paused";
  current_period_start: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  display_name: string | null;
  email: string | null;
  role: "user" | "admin";
  stripe_customer_id: string | null;
  created_at: string;
  updated_at: string;
}
