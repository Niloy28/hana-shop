import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// User Imports
import NavBar from "@/components/navbar/NavBar";
import { LinkData } from "@/types/link-data";

const homePageLinks: LinkData[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Bouquets",
    href: "/products/bouquets",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <>
      <header>
        <NavBar links={homePageLinks} authUser={user} />
      </header>
      {children}
    </>
  );
}
