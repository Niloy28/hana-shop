import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Link from "next/link";

// User Imports
import { redis } from "@/lib/redis";
import { verifyAdmin } from "@/lib/utils";
import { CartData } from "@/types/cart-data";
import { LinkData } from "@/types/link-data";
import { cookies } from "next/headers";
import Logo from "../Logo";
import ShoppingCartIcon from "../ShoppingCartIcon";
import AccountDropdown from "./AccountDropdown";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = async ({
  links,
  authUser,
}: Readonly<{
  links: LinkData[];
  authUser: KindeUser | null;
}>) => {
  let cartTotal: number | null = null;

  if (authUser) {
    const cart: CartData | null = await redis.get(`cart-${authUser.id}`);

    if (cart && cart.items) {
      cartTotal = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    }
  } else {
    const cartCookie = (await cookies()).get("cart");

    if (cartCookie) {
      cartTotal = (JSON.parse(cartCookie.value) as CartData).items.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
    }
  }

  return (
    <nav className="fixed top-0 z-50 mx-4 my-2 w-11/12 rounded-full bg-primary-foreground px-4 py-2 outline outline-1">
      <div className="flex w-full flex-1 items-center justify-between">
        <Link className="ml-4 px-4" href="/">
          <Logo />
        </Link>
        <div className="space-2 flex">
          <DesktopNavigation links={links} />
          <MobileNavigation links={links} />
          <ShoppingCartIcon cartTotal={cartTotal} />
          <AccountDropdown
            authUser={authUser}
            isAdmin={verifyAdmin(authUser?.email)}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
