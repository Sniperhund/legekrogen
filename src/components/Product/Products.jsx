import { Suspense } from "react"
import { Product } from "./Product"

// TODO: Optimize this using ISR
export const Products = async ({ recommended = false, title }) => {
	// Using caching cuts the response time (for this fetch) from 100-150ms to 0-20ms (in my experience)
	let products = await fetch("https://api.legekrogen.lucasskt.dk/products/", {
		cache: "force-cache",
	}).then((res) => res.json())
	products = products.data

	if (recommended)
		products = products.filter((product) => product.recommended)

	return (
		<section className="sectionWithTitle products">
			<div className="space-y-3">
				<p className="font-adventPro text-4xl md:text-[5.375rem] md:font-squarePeg md:leading-normal">
					{title}
				</p>
				<h3 className="font-beVietnamPro text-[2.5rem] font-light md:text-[4.8125rem] md:font-quicksand">
					LEGETØJ
				</h3>
			</div>

			<div className="grid">
				<Suspense fallback={<div>Loading...</div>}>
					{products.map((p, i) => (
						<Product key={i} product={p} />
					))}
				</Suspense>
			</div>
		</section>
	)
}
