import { env } from "@/env/server";
import { getUserSession } from "@/lib/server-utils";
import stripe from "@/lib/stripe";
import { CheckoutMetadata } from "@/types/checkout-metadata";
import { NextRequest, NextResponse } from "next/server";

async function getActiveProducts() {
  const stripeProducts = await stripe.products.list();

  return stripeProducts.data.filter((item: any) => item.active === true);
}

export async function POST(request: NextRequest) {
  try {
    const { products } = await request.json();
    const checkoutProducts = products;
    const user = await getUserSession();

    //Creating Checkout Stripe Items
    const activeProducts = await getActiveProducts();
    let checkoutStripeProducts: any = [];
    let checkoutMetadata: CheckoutMetadata[] = [];

    for (const checkoutProduct of checkoutProducts) {
      const stripeProducts = activeProducts?.find(
        (stripeProduct: any) => stripeProduct?.id === checkoutProduct?.id,
      );

      if (stripeProducts) {
        checkoutStripeProducts.push({
          price: stripeProducts?.default_price,
          quantity: checkoutProduct.quantity,
        });

        checkoutMetadata.push({
          id: checkoutProduct.id,
          quantity: checkoutProduct.quantity,
        });
      }
    }

    //Creating Checkout Session
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? env.PROD_BASE_URL
        : env.DEV_BASE_URL;

    const session = await stripe.checkout.sessions.create({
      line_items: checkoutStripeProducts,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: {
        products: JSON.stringify(checkoutMetadata),
        userID: user!.id,
      },
    });

    return NextResponse.json({
      url: session?.url,
    });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
