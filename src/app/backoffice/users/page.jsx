import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { FaEllipsis } from "react-icons/fa6"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { UserDropdown } from "../../../components/Backoffice/UserDropdown"

export default async function BackofficeUsers() {
	let users = await fetch("https://api.legekrogen.lucasskt.dk/users").then(
		(res) => res.json()
	)
	users = users.data

	async function reload() {
		"use server"

		users = await fetch("https://api.legekrogen.lucasskt.dk/users").then(
			(res) => res.json()
		)
		users = users.data
	}

	return (
		<Table>
			<TableCaption>A list of all registered users.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[24ch]">Id</TableHead>
					<TableHead>Picture</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Role</TableHead>
					<TableHead className="w-[50px]">Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map((user, i) => (
					<TableRow key={i}>
						<TableCell>{user._id}</TableCell>
						<TableCell>
							<img
								src={user.picture}
								alt={user.name}
								className="w-16 h-16 rounded-full"
							/>
						</TableCell>
						<TableCell>{user.name}</TableCell>
						<TableCell>{user.email}</TableCell>
						<TableCell>{user.role}</TableCell>
						<TableCell className="text-center text-xl">
							<UserDropdown user={user} reload={reload} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
