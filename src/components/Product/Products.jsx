import { Suspense } from "react"
import { Product } from "./Product"

// Optimize this using ISR
export const Products = async ({ recommended = false, title }) => {
	let products = await fetch("https://legekrogen.webmcdm.dk/products/", {
		cache: "force-cache",
	}).then((res) => res.json())

	if (recommended)
		products = products.filter((product) => product.recommended)

	return (
		<section className="sectionWithTitle products">
			<div>
				<p className="font-adventPro text-4xl">{title}</p>
				<h3 className="font-beVietnamPro text-[40px] font-light">
					LEGETØJ
				</h3>
			</div>

			<Suspense fallback={<div>Loading...</div>}>
				{products.map((p, i) => (
					<Product
						key={i}
						imageSrc={p.image}
						title={p.title}
						description={p.description}
						price={p.price}
					/>
				))}
			</Suspense>
		</section>
	)
}
