import styles from "@/components/Common/Common.module.css"
import { FaTruck } from "react-icons/fa6"

export const FreeDeliveryNotice = () => {
	return (
		<div className={styles.freeDeliveryNotice}>
			<FaTruck />
			<p>Fri fragt ved køb over 499,-</p>
		</div>
	)
}
