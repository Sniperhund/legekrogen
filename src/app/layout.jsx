import { fontsClassName } from "@/util/initializeFonts"
import "./globals.css"

export const metadata = {
	title: "Legekrogen",
	description: "",
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={fontsClassName}>{children}</body>
		</html>
	)
}
