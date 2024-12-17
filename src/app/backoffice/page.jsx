import { UsersChart } from "@/components/Charts/UsersChart"
import { ReviewsChart } from "@/components/Charts/ReviewsChart"
import styles from "./backoffice.module.css"

/**
 * Backoffice
 *
 * This page should include user-, product-, review- and order-management.
 */
export default function Backoffice() {
	return (
		<section className={styles.backoffice}>
			<article>
				<p>New Users</p>
				<UsersChart />
			</article>
			<article>
				<p>New Reviews</p>
				<ReviewsChart />
			</article>
		</section>
	)
}
