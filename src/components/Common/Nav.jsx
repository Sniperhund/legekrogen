"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import styles from "@/components/Common/Common.module.css"
import { FaBars, FaCartShopping, FaXmark } from "react-icons/fa6"
import { usePathname } from "next/navigation"
import { CartDisplay } from "./CartDisplay"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export const Nav = () => {
	const [cart, setCart] = useLocalStorage("cart", [])
	const [isMounted, setIsMounted] = useState(false)

	const [isNavOpen, setIsNavOpen] = useState(false)
	const [isCartOpen, setIsCartOpen] = useState(false)

	const pathname = usePathname()

	useEffect(() => {
		setIsNavOpen(false)
	}, [pathname])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<>
			<nav className={styles.nav}>
				<div className="flex items-center gap-4 px-[21px] py-[14px]">
					<Link href="/" className="font-squarePeg text-2xl">
						LegeKROGEN
					</Link>

					<FaCartShopping
						className="ml-auto"
						size={28}
						onClick={() => setIsCartOpen(true)}
						style={{
							color:
								isMounted && cart.length == 0
									? "rgba(0, 0, 0, 0.2)"
									: "white",
						}}
					/>
					<FaBars size={28} onClick={() => setIsNavOpen(true)} />
				</div>
				<ul
					className={`${styles.menu} ${
						isNavOpen ? styles.menuShown : styles.menuHidden
					}`}
				>
					<FaXmark
						size={64}
						onClick={() => setIsNavOpen(false)}
						className="absolute right-10 top-10"
					/>

					<li>
						<Link href="/">Forside</Link>
					</li>
					<li>
						<Link href="/products">Produkter</Link>
					</li>
					<li>
						<Link href="/faq">FAQ</Link>
					</li>
					<li>
						<Link href="/klub">Kundeklubben</Link>
					</li>
					<li>
						<Link href="/backoffice">Backoffice</Link>
					</li>
				</ul>
			</nav>

			<CartDisplay
				isCartOpen={isCartOpen}
				setIsCartOpen={setIsCartOpen}
			/>
		</>
	)
}
