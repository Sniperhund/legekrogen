import { fontsClassName } from "@/util/initializeFonts"
import "../globals.css"
import { Nav } from "@/components/Common/Nav"
import { FreeDeliveryNotice } from "@/components/Common/FreeDeliveryNotice"
import { Newsletter } from "@/components/Common/Newsletter"
import { Footer } from "@/components/Common/Footer"

export const metadata = {
	title: "Legekrogen",
	description: "",
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={fontsClassName}>
				{/* We can't add the hero here, since we can't pass data up to the layout without using contexts 
				    (and that is client side only) */}
				<FreeDeliveryNotice />
				<Nav />
				{children}
				<Newsletter />
				<Footer />
			</body>
		</html>
	)
}
