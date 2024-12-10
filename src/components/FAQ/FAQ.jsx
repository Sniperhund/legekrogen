import { FAQQuestion } from "./FAQQuestion"

export const FrequentlyAskedQuestions = async () => {
	let questionsAndAnswers = await fetch(
		"https://legekrogen.webmcdm.dk/questions",
		{
			cache: "force-cache",
		}
	).then((res) => res.json())

	return (
		<section className="py-8 px-10 flex flex-col gap-10">
			{questionsAndAnswers.map((qa, i) => (
				<FAQQuestion
					key={i}
					question={qa.question}
					answer={qa.answer}
				/>
			))}
		</section>
	)
}
