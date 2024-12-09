import {
	Inter,
	Square_Peg,
	Quicksand,
	Advent_Pro,
	Be_Vietnam_Pro,
} from "next/font/google"

export const inter = Inter({
	variable: "--font-inter",
})

export const squarePeg = Square_Peg({
	variable: "--font-square-peg",
	weight: "400",
})

export const quicksand = Quicksand({
	variable: "--font-quicksand",
})

export const adventPro = Advent_Pro({
	variable: "--font-advent-pro",
})

export const beVietnamPro = Be_Vietnam_Pro({
	variable: "--font-be-vietnam-pro",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const fonts = [inter, squarePeg, quicksand, adventPro, beVietnamPro]
export const fontsClassName = fonts.map((font) => font.variable).join(" ")
