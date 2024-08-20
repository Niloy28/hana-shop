import Link from "next/link";
import React from "react";

const NavBarLink = ({
  children,
  href,
  className,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  className?: string;
}>) => {
  return (
    <li
      className={`${className} mx-1 flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 text-lg lg:mx-4 lg:px-4`}
    >
      <Link href={href} className="w-full text-center">
        {children}
      </Link>
    </li>
  );
};

export default NavBarLink;
