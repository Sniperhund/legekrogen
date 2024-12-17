import { GetMonthAndYearFromDate } from "@/util/months"
import { ChartBase } from "./ChartBase"

export const NewsletterChart = async () => {
	const chartData = await fetch(
		"https://api.legekrogen.lucasskt.dk/subscribers"
	)
		.then((res) => res.json())
		.then((data) => {
			data = data.data

			let chartData = []

			data.map((user) => {
				const date = GetMonthAndYearFromDate(new Date(user.created))

				const monthIndex = chartData.findIndex(
					(data) => data.month === date.month
				)

				if (monthIndex === -1) {
					chartData.push({
						month: date.month,
						date: new Date(user.created),
						users: 1,
					})
				} else {
					chartData[monthIndex].users++
				}

				chartData.sort((a, b) => a.date - b.date)
			})

			return chartData
		})

	return <ChartBase chartData={chartData} />
}
