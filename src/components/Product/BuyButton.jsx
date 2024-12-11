"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage"
import styles from "./Product.module.css"

export const BuyButton = ({ product }) => {
	const [cart, setCart] = useLocalStorage("cart", [])

	const handleClick = () => {
		if (cart.some((p) => p.id === product.id)) return

		setCart([...cart, product])
	}

	return (
		<button className={styles.buy} onClick={handleClick}>
			KØB
		</button>
	)
}
