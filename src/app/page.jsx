import styles from "./frontpage.module.css"
import { Hero } from "@/components/Common/Hero"
import { Product } from "@/components/Product/Product"
import { Review } from "@/components/Review/Review"

export default async function Home() {
	let products = await fetch("https://legekrogen.webmcdm.dk/products/").then(
		(res) => res.json()
	)

	products = products.filter((product) => product.recommended)

	let reviews = await fetch("https://legekrogen.webmcdm.dk/reviews").then(
		(res) => res.json()
	)

	return (
		<>
			<Hero
				imageSrc="/heros/forsiden.jpg"
				fancyTitle="At lege er at leve"
				description="Her hos os har vi et stort udvalg af legetøj i høj kvalitet"
				frontPage
			/>

			<section className="sectionWithTitle products">
				<div>
					<p className="font-adventPro text-4xl">
						Et udpluk af vores
					</p>
					<h3 className="font-beVietnamPro text-[40px] font-light">
						LEGETØJ
					</h3>
				</div>

				{products.map((p, i) => (
					<Product
						key={i}
						imageSrc={p.image}
						title={p.title}
						description={p.description}
						price={p.price}
					/>
				))}
			</section>

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
		</>
	)
}
