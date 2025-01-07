import { env } from "@/env/server";
import prisma from "@/lib/db";
import { redis } from "@/lib/redis";
import stripe from "@/lib/stripe";
import { CheckoutMetadata } from "@/types/checkout-metadata";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const endpointSecret = env.STRIPE_SECRET_WEBHOOK_KEY;
  const sig = (await headers()).get("stripe-signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", status: 400 });
  }

  const eventType = event.type;
  // Skip all events except session completion
  if (eventType !== "checkout.session.completed") {
    return;
  }

  const data = event.data.object;
  const userID = data.metadata!.userID;
  const checkoutProducts = JSON.parse(
    data.metadata!.products!,
  ) as CheckoutMetadata[];
  const created = data.created;
  const customerDetails = data.customer_details;
  const address = Array.from(Object.values(customerDetails as Object)).join(
    ", ",
  );
  const amount = data.amount_total;

  try {
    // database update here
    const order = await prisma.order.create({
      data: {
        name: customerDetails!.name ?? "Unknown",
        email: customerDetails!.email ?? "Unknown",
        createdAt: new Date(created),
        status: "paid",
        userId: userID ?? "Unknown",
        productIds: checkoutProducts.map((product) => product.id),
        quantities: checkoutProducts.map((product) => product.quantity),
        total: amount!,
        address,
      },
    });

    // save order ID as a cookie
    (await cookies()).set("orderID", order.id);

    // clear both local (if present) and remote cart data for user
    (await cookies()).delete("cart");
    await redis.del(`cart-${userID}`);

    return NextResponse.json({ message: "Order created", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error", status: 500 });
  }
}
