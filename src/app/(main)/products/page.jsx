import { Hero } from "@/components/Common/Hero"
import { Products as _Products } from "@/components/Product/Products"

export default async function Products() {
	return (
		<>
			<Hero
				imageSrc="/heros/produkter.jpg"
				fancyTitle="På udkig efter nyt"
				normalTitle="LEGETØJ?"
			/>

			<_Products title="Alt vores" />
		</>
	)
}
