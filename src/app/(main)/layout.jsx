import "../globals.css"
import { Nav } from "@/components/Common/Nav"
import { FreeDeliveryNotice } from "@/components/Common/FreeDeliveryNotice"
import { Newsletter } from "@/components/Common/Newsletter"
import { Footer } from "@/components/Common/Footer"

export default async function RootLayout({ children }) {
	return (
		<>
			<Nav />
			<FreeDeliveryNotice />
			{children}
			<Newsletter />
			<Footer />
		</>
	)
}
