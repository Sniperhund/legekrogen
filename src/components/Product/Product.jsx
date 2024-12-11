import styles from "./Product.module.css"
import Image from "next/image"

export const Product = ({
	imageSrc = "",
	title = "",
	description = "",
	price = "",
	discount = 0,
}) => {
	return (
		<article className={styles.card}>
			<Image src={imageSrc} alt={title} width={350} height={250} />

			{discount > 0 && <div className={styles.discount}>{discount}%</div>}

			<div className={`${styles.info} space-y-2`}>
				<h4 className="text-2xl font-thin">{title}</h4>
				<p className="text-[0.9375rem] font-medium">{description}</p>
				<p className="text-2xl font-light">{price} kr</p>
			</div>
		</article>
	)
}
