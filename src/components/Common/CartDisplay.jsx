"use client"

import { useEffect, useRef, useState } from "react"
import styles from "@/components/Common/Common.module.css"
import { FaXmark } from "react-icons/fa6"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { Divider } from "./Divider"

export const CartDisplay = ({ isCartOpen, setIsCartOpen }) => {
	const [cart, setCart, removeCart] = useLocalStorage("cart", [])
	const [isMounted, setIsMounted] = useState(false)

	const cartMenuRef = useRef(null)

	useEffect(() => {
		if (!cartMenuRef.current) return

		if (isCartOpen) {
			cartMenuRef.current.style.transform = "none"
			return
		}

		setTimeout(() => {
			cartMenuRef.current.style.transform = "translateY(100vh)"
		}, 300)
	}, [isCartOpen])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		if (!cart) return

		let currentPrice = 0

		cart.forEach((p) => {
			currentPrice += p.price
		})

		setTotalPrice(currentPrice)
	}, [cart?.length])

	const buy = async (e) => {
		e.preventDefault()

		if (!cart?.length) return

		let products = []

		cart.forEach((p) => {
			products.push({
				id: p._id,
				quantity: 1,
			})
		})

		const response = fetch("https://api.legekrogen.lucasskt.dk/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				products: products,
			}),
		}).then(() => {
			alert("Tak for din bestilling!")
		})

		removeCart()
		setIsCartOpen(false)
	}

	return (
		<div
			className={`${styles.cartMenu} ${isCartOpen ? styles.active : ""} ${
				isMounted && cart?.length == 0 ? styles.empty : ""
			}`}
			ref={cartMenuRef}
			style={{ transform: "translateY(100vh)" }}
		>
			<div className="flex flex-col gap-5 font-beVietnamPro">
				<FaXmark
					size={24}
					onClick={() => setIsCartOpen(false)}
					className="absolute right-4 top-4"
				/>
				{!isMounted ? (
					<p>Loading...</p>
				) : cart?.length == 0 ? (
					<p>Der er ingen varer i kurven...</p>
				) : (
					<>
						{cart?.map((p, i) => (
							<article key={i} className="w-full">
								<div className={`${styles.product} mb-5`}>
									<img src={p.image} alt={p.title} />

									<div>
										<p className="text-sm font-light">
											{p.title}
										</p>
										<p className="font-medium">
											{p.description}
										</p>
									</div>

									<p className="text-xl font-light ml-auto">
										{p.price} kr
									</p>
								</div>
								<Divider />
							</article>
						))}

						<div className="flex items-center justify-between mt-8 mb-3">
							<button onClick={buy}>Fuldfør køb</button>

							<p className="text-xl font-light">
								I alt {totalPrice} kr
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
