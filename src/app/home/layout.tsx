// User Imports
import NavBar from "@/components/navbar/NavBar";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header>
				<NavBar />
			</header>
			{children}
		</>
	);
}
