import { env } from "@/env/server";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toCurrencyString = (currency: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currency);
};

export const verifyAdmin = (email: string | null) => {
  return email && env.ADMIN_EMAIL.split(",").includes(email);
};

export const enumToString = (enumName: string) => {
  return enumName.split("_").join(" ");
};
