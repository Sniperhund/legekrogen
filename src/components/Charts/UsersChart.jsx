"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
	ChartTooltip,
	ChartTooltipContent,
	ChartContainer,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { GetMonthAndYearFromDate } from "@/util/months"

const chartConfig = {
	users: {
		label: "Users",
		color: "#2563eb",
	},
}

/*const chartData = [
	{ month: "January", users: 186 },
	{ month: "February", users: 305 },
	{ month: "March", users: 237 },
	{ month: "April", users: 73 },
	{ month: "May", users: 209 },
	{ month: "June", users: 214 },
]*/

export const UsersChart = () => {
	const [chartData, setChartData] = useState([])

	useEffect(() => {
		fetch("https://api.legekrogen.lucasskt.dk/users")
			.then((res) => res.json())
			.then((data) => {
				data = data.data

				let users = []

				data.map((user) => {
					const date = GetMonthAndYearFromDate(new Date(user.created))

					const monthIndex = users.findIndex(
						(data) => data.month === date.month
					)

					if (monthIndex === -1) {
						users.push({
							month: date.month,
							date: new Date(user.created),
							users: 1,
						})
					} else {
						users[monthIndex].users++
					}

					users.sort((a, b) => a.date - b.date)
				})

				console.log(users)

				setChartData(users)
			})
	}, [])

	return (
		<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
			<LineChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={true}
					tickMargin={5}
					label={{ value: "Month", position: "insideBottom", dy: 10 }}
					minTickGap={0}
					axisLine={false}
				/>
				<YAxis allowDecimals={false} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<Line
					type="monotone"
					dataKey="users"
					stroke={chartConfig.users.color}
				/>
			</LineChart>
		</ChartContainer>
	)
}
