import styles from "./Common.module.css"
import Link from "next/link"

export const Newsletter = () => {
	return (
		<article className={styles.newsletter}>
			<p className="font-quicksand">
				Kunne du også tænke dig at blive medlem af vores
			</p>
			<p className="font-squarePeg text-[64px]">Kundeklub?</p>

			<Link href="/klub">Bliv medlem nu!</Link>
		</article>
	)
}
