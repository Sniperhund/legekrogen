"use client"

import Link from "next/link"
import { useState } from "react"
import styles from "@/components/Common/Nav.module.css"

export const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true)

	return (
		<nav>
			<div></div>
			<ul className={isMenuOpen ? styles.open : "hidden"}>
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
