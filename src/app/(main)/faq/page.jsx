import { Hero } from "@/components/Common/Hero"
import { FrequentlyAskedQuestions } from "@/components/FAQ/FAQ"

export default async function FAQ() {
	return (
		<>
			<Hero
				imageSrc="/heros/FAQ.jpg"
				fancyTitle="Har du nogle"
				normalTitle="SPØRGSMÅL?"
				description="Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os."
			/>

			<FrequentlyAskedQuestions />
		</>
	)
}
