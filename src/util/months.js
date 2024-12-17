const MonthIndex = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

export const GetMonthAndYearFromDate = (date) => {
	return {
		month: MonthIndex[date.getMonth()],
		year: date.getFullYear(),
	}
}
