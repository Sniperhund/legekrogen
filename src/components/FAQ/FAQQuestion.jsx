"use client"

import styles from "./FAQ.module.css"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"
import { Divider } from "@/components/Common/Divider"
import { motion, AnimatePresence } from "framer-motion"

export const FAQQuestion = ({ answer, question }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<article
			className={`${styles.faqQuestion} ${isOpen ? styles.open : ""}`}
			onClick={() => {
				setIsOpen(!isOpen)
			}}
		>
			<motion.div
				className="flex items-center justify-between p-5"
				initial={false}
			>
				<p className="max-w-[90%]">{question}</p>
				{isOpen ? (
					<FaChevronUp size={20} />
				) : (
					<FaChevronDown size={20} />
				)}
			</motion.div>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
						transition={{
							type: "spring",
							duration: 0.4,
							bounce: 0,
						}}
					>
						<div className="mx-5">
							<Divider />
						</div>
						<div className="m-5">
							<p dangerouslySetInnerHTML={{ __html: answer }}></p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	)
}
