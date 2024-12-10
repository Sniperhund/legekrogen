"use client"

// TODO: Move this to the component
import styles from "@/app/klub/klub.module.css"

export const KlubForm = () => {
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
				body: JSON.stringify({ name, email, message }),
			}
		)

		let json = await response.json()

		// TODO: Finish this with a toast
		console.log(response, json)
	}

	return (
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
	)
}
