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

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header>
				<NavBar links={homePageLinks} />
			</header>
			{children}
		</>
	);
}
