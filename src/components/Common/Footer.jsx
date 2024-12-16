import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa6"
import styles from "./Common.module.css"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className="font-squarePeg text-[3rem] md:text-7xl">
				Kundeservice
			</p>
			<div className="md:text-2xl font-quicksand">
				<p className="gap-1">
					<FaEnvelope size={24} />
					kontakt@legekrogen.dk
				</p>
				<p className="gap-1">
					<FaPhone size={24} />
					+45 23 45 67 89
				</p>
			</div>
			<p
				className={`font-quicksand text-2xl ${styles.followUs} md:font-squarePeg md:text-6xl`}
			>
				Følg os
			</p>
			<div className="flex gap-2">
				<FaFacebook size={50} />
				<FaInstagram size={50} />
			</div>
		</footer>
	)
}
