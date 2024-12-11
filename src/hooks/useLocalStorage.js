// Taken from https://stackoverflow.com/questions/68808837/next-js-use-localstorage-problem-with-ssr

import { useCallback, useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
	const initialize = (key) => {
		try {
			const item = localStorage.getItem(key)
			if (item && item !== "undefined") {
				return JSON.parse(item)
			}

			localStorage.setItem(key, JSON.stringify(initialValue))
			return initialValue
		} catch {
			return initialValue
		}
	}

	const [state, setState] = useState(() => initialize(key))

	const setValue = useCallback(
		(value) => {
			try {
				const valueToStore =
					value instanceof Function ? value(state) : value
				setState(valueToStore)
				localStorage.setItem(key, JSON.stringify(valueToStore))
				window.dispatchEvent(new Event("storage"))
			} catch (error) {
				console.log(error)
			}
		},
		[key, state]
	)

	const remove = useCallback(() => {
		try {
			localStorage.removeItem(key)
			setState(initialValue)
			window.dispatchEvent(new Event("storage"))
		} catch {
			console.log(error)
		}
	}, [key, initialValue])

	useEffect(() => {
		const handleStorageChange = () => {
			setState(initialize(key))
		}

		window.addEventListener("storage", handleStorageChange)
		return () => {
			window.removeEventListener("storage", handleStorageChange)
		}
	}, [key])

	return [state, setValue, remove]
}
