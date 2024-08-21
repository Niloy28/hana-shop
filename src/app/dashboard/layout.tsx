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
    name: "Categories",
    href: "/dashboard/categories",
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
    redirect("/home");
  }

  return (
    <>
      <header>
        <NavBar links={dashboardLinks} authUser={user} />
      </header>
      <div className="mx-16 my-10 px-8">
        <main>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
