import { UsersChart } from "@/components/Charts/UsersChart"
import { ReviewsChart } from "@/components/Charts/ReviewsChart"
import styles from "./backoffice.module.css"
import { NewsletterChart } from "../../components/Charts/NewsletterChart"

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
			<article>
				<p>New newsletter subscribers</p>
				<NewsletterChart />
			</article>
		</section>
	)
}
