import Link from "next/link"
import "../globals.css"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarProvider,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarGroupContent,
	SidebarRail,
} from "@/components/ui/sidebar"
import {
	FaArrowLeft,
	FaHouse,
	FaRightFromBracket,
	FaUser,
} from "react-icons/fa6"
import { PromptLogin } from "@/components/Backoffice/PromptLogin"
import { Signout } from "@/components/Backoffice/Signout"

export default async function RootLayout({ children }) {
	return (
		<SidebarProvider>
			<PromptLogin />

			<Sidebar collapsible="icon">
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>
							Legekrogen - Dashboard
						</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link href="/backoffice">
											<FaHouse /> Home
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link href="/backoffice/users">
											<FaUser /> Manage users
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<Signout />
					<SidebarMenuButton asChild>
						<Link href="/">
							<FaArrowLeft /> Return to Legekrogen
						</Link>
					</SidebarMenuButton>
				</SidebarFooter>
				<SidebarRail />
			</Sidebar>

			<section className="p-4 w-full relative">{children}</section>
		</SidebarProvider>
	)
}
