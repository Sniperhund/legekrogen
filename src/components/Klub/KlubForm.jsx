"use client"

import styles from "./klub.module.css"
import Link from "next/link"
import { useState } from "react"
import { ModalNameDisplay } from "./ModalNameDisplay"

export const KlubForm = () => {
	const [showModal, setShowModal] = useState(false)
	const [name, setName] = useState("")

	const submit = async (e) => {
		console.log("submit")

		e.preventDefault()

		let { name, email, message } = e.target

		name = name.value
		email = email.value
		message = message.value

		/*await fetch("https://legekrogen.webmcdm.dk/subscribe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		})*/

		setName(name)
		setShowModal(true)

		e.target.reset()
	}

	return (
		<>
			<div
				className={`${styles.modal} ${showModal ? styles.active : ""}`}
			>
				<ModalNameDisplay name={name} />

				<p>
					Vi er så glade for at du vil være en del af vores kundeklub
				</p>
				<p>
					Tag et kig på din indbakke. Vi har givet dig fri fragt på
					din næste ordre.
				</p>

				<Link href="/">TIL FORSIDEN</Link>
			</div>

			<form className={styles.form} onSubmit={submit}>
				<input type="text" name="name" placeholder="Fulde navn" />
				<input type="email" name="email" placeholder="Email" />

				<textarea
					name="message"
					placeholder="Hvem køber du legetøj til?"
					rows={3}
					className="mb-[calc(80px-36px)]"
				/>

				<input type="submit" value="Bliv medlem nu!" />
			</form>
		</>
	)
}
