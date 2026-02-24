import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Apple iPhone Clone",
	description:
		"Frontend-only recreation of Apple’s iPhone product page using Next.js, Tailwind CSS, and Framer Motion, focusing on Apple-level UI polish, responsive layouts, and scroll-based animations.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable}  antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
