// User Imports
import NavBar from "@/components/navbar/NavBar";
import { getUserSession } from "@/lib/server-utils";
import { LinkData } from "@/types/link-data";

const homePageLinks: LinkData[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
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
  const user = await getUserSession();

  return (
    <>
      <header>
        <NavBar links={homePageLinks} authUser={user} />
      </header>
      {children}
    </>
  );
}
