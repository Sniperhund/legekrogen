"use client"

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

export const UserDropdown = ({ user, reload }) => {
	const { toast } = useToast()

	const deleteUser = async (id) => {
		// Why do all the endpoints return a status key (ok | error), but not these ones?
		const user = await fetch(
			"https://api.legekrogen.lucasskt.dk/user/" + id
		).then((res) => res.json())

		if (user.message == "An Error Occurred - See Database log.") {
			toast({
				title: "Failed to delete user",
				variant: "destructive",
			})
			return
		}

		if (user.data.role == "admin") {
			toast({
				title: "You can't delete an admin user",
				variant: "destructive",
			})
			return
		}

		const result = await fetch(
			"https://api.legekrogen.lucasskt.dk/user/" + id,
			{
				method: "DELETE",
			}
		).then((res) => res.json())

		if (result.message == "User deleted successfully") {
			toast({
				title: "User deleted",
			})

			reload()
		} else {
			toast({
				title: "Failed to delete user",
				variant: "destructive",
			})
		}
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<FaEllipsis />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{user.name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Change details</DropdownMenuItem>
				<DropdownMenuItem onClick={() => deleteUser(user._id)}>
					Delete user
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
