import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Link from "next/link";

// User Imports
import { LinkData } from "@/types/link-data";
import Logo from "../Logo";
import AccountDropdown from "./AccountDropdown";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = ({
  links,
  authUser,
}: Readonly<{
  links: LinkData[];
  authUser: KindeUser | null;
}>) => {
  return (
    <nav className="sticky mx-4 my-2 rounded-full px-4 py-2 outline outline-1">
      <div className="flex w-full flex-1 items-center justify-between">
        <Link className="ml-4 px-4" href="/home">
          <Logo />
        </Link>
        <div className="space-2 flex">
          <DesktopNavigation links={links} />

          <MobileNavigation links={links} />
          <AccountDropdown authUser={authUser} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
