import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

// User Imports
import NavBar from "@/components/navbar/NavBar";
import { verifyAdmin } from "@/lib/utils";
import { LinkData } from "@/types/link-data";

const dashboardLinks: LinkData[] = [
  {
    name: "Summary",
    href: "/dashboard",
  },
  {
    name: "Order",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Banners",
    href: "/dashboard/banners",
  },
];

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || !verifyAdmin(user.email)) {
    redirect("/");
  }

  return (
    <>
      <header>
        <NavBar links={dashboardLinks} authUser={user} />
      </header>
      <div className="mx-4 my-2 px-2 sm:mx-12 sm:my-8 sm:px-4">
        <main>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
