"use client"

import styles from "./klub.module.css"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export const KlubForm = () => {
	const [showModal, setShowModal] = useState(false)
	const [name, setName] = useState("")

	const { toast } = useToast()

	const submit = async (e) => {
		console.log("submit")

		e.preventDefault()

		let { name, email, message } = e.target

		name = name.value
		email = email.value
		message = message.value

		const result = await fetch(
			"https://api.legekrogen.lucasskt.dk/subscribe",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, message }),
			}
		).then((res) => res.json())

		if (result.status == "ok") {
			setName(name)
			setShowModal(true)

			e.target.reset()

			return
		}

		{
			/* Does this look enough like the UI to use? */
		}
		toast({
			title: "Åh nej, der skete en fejl",
			description: result.message,
			variant: "destructive",
		})
	}

	return (
		<>
			<div
				className={`${styles.modal} ${showModal ? styles.active : ""}`}
			>
				<h1>Tak {name}!</h1>

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
