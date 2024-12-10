import styles from "@/app/frontpage.module.css"
import { Review } from "@/components/Review/Review"

// Optimize this using ISR
export const Reviews = async () => {
	let reviews = await fetch("https://legekrogen.webmcdm.dk/reviews", {
		cache: "force-cache",
	}).then((res) => res.json())

	return (
		<section className={`sectionWithTitle ${styles.reviews}`}>
			<div>
				<p className="font-squarePeg text-4xl">Vores kunder</p>
				<h3 className="font-beVietnamPro text-[32px] font-light">
					UDTALER
				</h3>
			</div>

			{reviews.map((r, i) => (
				<Review key={i} message={r.description} author={r.name} />
			))}
		</section>
	)
}