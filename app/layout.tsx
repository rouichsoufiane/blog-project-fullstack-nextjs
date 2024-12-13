import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Blog Application",
	description:
		"a blog application created by soufiane rouich as practice to develop his skills",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
