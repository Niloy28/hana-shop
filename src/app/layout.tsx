import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// User Imports
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hana Shop (花屋)",
	description: "A shop to buy flowers for your loved ones.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<NavBar />
				</header>
				{children}
			</body>
		</html>
	);
}
