"use client"

import Link from "next/link"
import { FaRightFromBracket } from "react-icons/fa6"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { deleteCookie } from "cookies-next/client"
import { useRouter } from "next/navigation"

export const Signout = () => {
	const router = useRouter()

	return (
		<SidebarMenuButton asChild>
			<button
				onClick={() => {
					deleteCookie("token")
					router.push("/")
				}}
			>
				<FaRightFromBracket /> Sign out
			</button>
		</SidebarMenuButton>
	)
}
