import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa6"
import styles from "./Common.module.css"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className="font-squarePeg text-[3rem]">Kundeservice</p>
			<div>
				<p className="gap-1">
					<FaEnvelope size={24} />
					kontakt@legekrogen.dk
				</p>
				<p className="gap-1">
					<FaPhone size={24} />
					+45 23 45 67 89
				</p>
			</div>
			<p className={`font-quicksand text-2xl ${styles.followUs}`}>
				Følg os
			</p>
			<div className="flex gap-2">
				<FaFacebook size={50} />
				<FaInstagram size={50} />
			</div>
		</footer>
	)
}
