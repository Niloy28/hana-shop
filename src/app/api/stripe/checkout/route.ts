import { env } from "@/env/server";
import { getUserSession } from "@/lib/server-utils";
import stripe from "@/lib/stripe";
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

    for (const product of checkoutProducts) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) => stripeProduct?.id === product?.id,
      );

      if (stripeProduct) {
        checkoutStripeProducts.push({
          price: stripeProduct?.default_price,
          quantity: product.quantity,
        });
      }
    }

    //Creating Checkout Session
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? env.PROD_BASE_URL
        : env.DEV_BASE_URL;
    console.log(checkoutStripeProducts);

    const session = await stripe.checkout.sessions.create({
      line_items: checkoutStripeProducts,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: {
        userID: user!.id,
      },
    });

    return NextResponse.json({
      url: session?.url,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
