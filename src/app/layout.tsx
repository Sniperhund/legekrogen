import { fontsClassName } from "@/util/initializeFonts"
import type { Metadata } from "next"
import "./globals.css"
import { Nav } from "@/components/Common/Nav"

export const metadata: Metadata = {
	title: "Legekrogen",
	description: "",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={fontsClassName}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
