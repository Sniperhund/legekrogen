"use client"

import styles from "./klub.module.css"
import Link from "next/link"
import { useState } from "react"

export const KlubForm = () => {
	const [showModal, setShowModal] = useState(false)

	const submit = async (e) => {
		e.preventDefault()

		let { name, email, message } = e.target

		name = name.value
		email = email.value
		message = message.value

		const response = await fetch(
			"https://legekrogen.webmcdm.dk/subscribe",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, message }),
			}
		)

		let json = await response.json()

		setShowModal(true)
	}

	return (
		<>
			<div
				className={`${styles.modal} ${showModal ? styles.active : ""}`}
			>
				<h1>Tak!</h1>

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
				/>

				<input type="submit" value="Bliv medlem nu!" />
			</form>
		</>
	)
}
