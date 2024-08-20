export type OrderType = "Sale" | "Refund" | "Replace";

export const OrderStatus = ["Pending", "Processing", "Done"] as const;
