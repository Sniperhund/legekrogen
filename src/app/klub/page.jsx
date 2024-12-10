import { KlubForm } from "@/components/KlubForm"
import { Hero } from "@/components/Common/Hero"

export default function Klub() {
	return (
		<>
			<Hero
				imageSrc="/heros/medlem.jpg"
				fancyTitle="Bliv medlem af vores"
				normalTitle="KUNDEKLUB"
				description="og få eksklusive nyheder før alle andre"
			/>

			<KlubForm />
		</>
	)
}
