"use client"

import { useMediaQuery } from "@uidotdev/usehooks"
import { useEffect } from "react"
import { useState } from "react"

export const ModalNameDisplay = ({ name }) => {
	const isMobile = useMediaQuery("(max-width: 768px)")

	const [showName, setShowName] = useState(false)

	useEffect(() => {
		setShowName(!isMobile)
	}, [isMobile])

	return (
		<h1>
			Tak <span className={showName ? "block" : "hidden"}>{name}</span>!
		</h1>
	)
}
