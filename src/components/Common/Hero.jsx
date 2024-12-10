"use client"

import styles from "@/components/Common/Common.module.css"
import { useState } from "react"
import { useEffect } from "react"

export const Hero = ({
	imageSrc = "",
	fancyTitle = "",
	normalTitle = "",
	description = "",
	className = "",
	frontPage = false,
}) => {
	const [height, setHeight] = useState(0)

	/* Since the nav bar can change height depending on user settings, 
	   and we can't wrap it all (nav, delivery and hero) in a container (with 100vh)
	   we have to calculate the height at runtime right on the client */
	const calculateHeight = () => {
		if (window == undefined) return

		const nav = document.querySelector(`.${styles.nav}`)
		const freeDeliveryNotice = document.querySelector(
			`.${styles.freeDeliveryNotice}`
		)

		if (!nav || !freeDeliveryNotice) {
			setHeight("100vh")
			return
		}

		const height = nav?.offsetHeight + freeDeliveryNotice?.offsetHeight

		setHeight(height)
	}

	useEffect(() => {
		if (window == undefined) return

		window.addEventListener("resize", calculateHeight)

		calculateHeight()

		return () => window.removeEventListener("resize", calculateHeight)
	}, [])

	// TODO: Move the image to a next/image component, so it optimizes the image
	return (
		<section
			className={`${className} ${styles.hero}`}
			style={{
				backgroundImage: `linear-gradient(var(--hero-overlay), var(--hero-overlay)), url(${imageSrc})`,
				height: `calc(100vh - ${height}px)`,
				paddingBottom: `${height}px`,
			}}
		>
			<h1 className={frontPage ? styles.frontPage : ""}>{fancyTitle}</h1>
			<h2>{normalTitle}</h2>
			<p>{description}</p>
		</section>
	)
}
