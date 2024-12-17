import { fontsClassName } from "@/util/initializeFonts"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
	title: "Legekrogen",
	description: "",
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={fontsClassName}>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	)
}
