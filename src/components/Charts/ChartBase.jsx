"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
	ChartTooltip,
	ChartTooltipContent,
	ChartContainer,
} from "@/components/ui/chart"

const chartConfig = {
	users: {
		label: "Users",
		color: "#2563eb",
	},
}

export const ChartBase = ({ chartData }) => {
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
