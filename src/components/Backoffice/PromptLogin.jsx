"use client"

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { getCookie, setCookie, hasCookie } from "cookies-next/client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export const PromptLogin = () => {
	const token = hasCookie("token")
	const [open, setOpen] = useState(false)
	const router = useRouter()

	const { toast } = useToast()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	useEffect(() => {
		setOpen(!token)
	}, [])

	const submit = () => {
		fetch("https://api.legekrogen.lucasskt.dk/auth/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res)

				if (res.status == "ok") {
					setCookie("token", res.data.token)
					setOpen(false)
				} else {
					toast({
						title: "Åh nej, der skete en fejl",
						description: res.message,
						variant: "destructive",
					})
				}
			})
	}

	return (
		<AlertDialog open={open}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="mb-4">
						Sorry, you have to login before you access this page
					</AlertDialogTitle>

					<form className="space-y-4">
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</form>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => router.push("/")}>
						Go back
					</AlertDialogCancel>
					<AlertDialogAction onClick={() => submit()}>
						Sign in
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
