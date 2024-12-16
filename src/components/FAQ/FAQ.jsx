import { FAQQuestion } from "./FAQQuestion"

export const FrequentlyAskedQuestions = async () => {
	let questionsAndAnswers = await fetch(
		"https://api.legekrogen.lucasskt.dk/qandas",
		{
			cache: "force-cache",
		}
	).then((res) => res.json())
	questionsAndAnswers = questionsAndAnswers.data

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
