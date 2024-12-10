import {
	Inter,
	Square_Peg,
	Quicksand,
	Advent_Pro,
	Be_Vietnam_Pro,
} from "next/font/google"

export const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})

export const squarePeg = Square_Peg({
	variable: "--font-square-peg",
	weight: "400",
	subsets: ["latin"],
})

export const quicksand = Quicksand({
	variable: "--font-quicksand",
	subsets: ["latin"],
})

export const adventPro = Advent_Pro({
	variable: "--font-advent-pro",
	subsets: ["latin"],
})

export const beVietnamPro = Be_Vietnam_Pro({
	variable: "--font-be-vietnam-pro",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})

const fonts = [inter, squarePeg, quicksand, adventPro, beVietnamPro]
export const fontsClassName = fonts.map((font) => font.variable).join(" ")
