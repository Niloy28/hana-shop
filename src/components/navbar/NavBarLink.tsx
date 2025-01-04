import Link from "next/link";
import React from "react";

const NavBarLink = ({
  children,
  href,
  className,
  type = "list",
}: Readonly<{
  children: React.ReactNode;
  href: string;
  className?: string;
  type?: "list" | "span";
}>) => {
  const computedClasses = `${className} mx-1 flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 text-lg lg:mx-4 lg:px-4`;
  const innerContent = (
    <Link href={href} className="w-full text-center">
      {children}
    </Link>
  );

  return (
    <>
      {type === "list" ? (
        <p className={computedClasses}>{innerContent}</p>
      ) : (
        <span role="menuitem" className={computedClasses}>
          {innerContent}
        </span>
      )}
    </>
  );
};

export default NavBarLink;
