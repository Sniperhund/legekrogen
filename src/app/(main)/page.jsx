import { Hero } from "@/components/Common/Hero"
import { Products } from "@/components/Product/Products"
import { Suspense } from "react"
import { Reviews } from "@/components/Review/Reviews"

export default async function Home() {
	return (
		<>
			<Hero
				imageSrc="/heros/forsiden.jpg"
				fancyTitle="At lege er at leve"
				description="Her hos os har vi et stort udvalg af legetøj i høj kvalitet"
				frontPage
			/>

			{/* Suspense is not working correctly with displaying a loading screen */}
			<Products recommended title="Et udpluk af vores" />

			<Suspense fallback={<div>Loading...</div>}>
				<Reviews />
			</Suspense>
		</>
	)
}
