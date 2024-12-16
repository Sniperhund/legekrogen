"use client"

import { usePathname } from "next/navigation"
import styles from "./Common.module.css"
import Link from "next/link"

/**
 * 	It's a bit irritating that the newsletter is not shown on the /klub page
 *  since I have to make this a client component to accomplish that.
 */
export const Newsletter = () => {
	const pathname = usePathname()

	if (pathname === "/klub") {
		return <></>
	}

	return (
		<article className={styles.newsletter}>
			<div>
				<p className="font-quicksand md:text-2xl">
					Kunne du også tænke dig at blive medlem af vores
				</p>
				<p className="font-squarePeg text-[4rem] md:text-[6rem]">
					Kundeklub?
				</p>

				<Link href="/klub">Bliv medlem nu!</Link>
			</div>
		</article>
	)
}
