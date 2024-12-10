"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "@/components/Common/Common.module.css"
import { FaBars, FaXmark } from "react-icons/fa6"
import { usePathname } from "next/navigation"

export const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const pathname = usePathname()

	useEffect(() => {
		setIsMenuOpen(false)
	}, [pathname])

	return (
		<nav className={styles.nav}>
			<div className="flex items-center justify-between px-[21px] py-[14px]">
				<Link href="/" className="font-squarePeg text-2xl">
					LegeKROGEN
				</Link>

				<FaBars size={28} onClick={() => setIsMenuOpen(true)} />
			</div>
			<ul
				className={`${styles.menu} ${
					isMenuOpen ? styles.menuShown : styles.menuHidden
				}`}
			>
				<FaXmark
					size={64}
					onClick={() => setIsMenuOpen(false)}
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
	)
}
