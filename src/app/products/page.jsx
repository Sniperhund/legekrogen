import { Hero } from "@/components/Common/Hero"
import { Product } from "@/components/Product/Product"
import { Review } from "@/components/Review/Review"

export default async function Products() {
	let products = await fetch("https://legekrogen.webmcdm.dk/products/").then(
		(res) => res.json()
	)

	return (
		<>
			<Hero
				imageSrc="/heros/produkter.jpg"
				fancyTitle="På udkig efter nyt"
				normalTitle="LEGETØJ?"
			/>

			<section className="sectionWithTitle products">
				<div>
					<p className="font-adventPro text-4xl">Alt vores</p>
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
		</>
	)
}
