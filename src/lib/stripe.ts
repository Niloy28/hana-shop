import { env } from "@/env/server";
import Stripe from "stripe";

const stripe = new Stripe(env.STRIPE_CLIENT_SECRET);

export default stripe;
