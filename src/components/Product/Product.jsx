import styles from "./Product.module.css"
import Image from "next/image"
import { BuyButton } from "./BuyButton"

export const Product = ({
	product = { image: "", title: "", description: "", price: 0, discount: 0 },
}) => {
	return (
		<article className={styles.card}>
			<Image
				src={product.image}
				alt={product.title}
				width={350}
				height={250}
			/>

			{product.discount > 0 && (
				<div className={styles.discount}>{product.discount}%</div>
			)}

			<div className={`${styles.info} space-y-2`}>
				<h4 className="text-2xl font-thin">{product.title}</h4>
				<p className="text-[0.9375rem] font-medium">
					{product.description}
				</p>
				<p className="text-2xl font-light">{product.price} kr</p>

				<BuyButton product={product} />
			</div>
		</article>
	)
}
