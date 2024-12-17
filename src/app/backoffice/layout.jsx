import Link from "next/link"
import "../globals.css"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarProvider,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarGroupContent,
} from "@/components/ui/sidebar"
import { FaArrowLeft, FaHouse } from "react-icons/fa6"

export default async function RootLayout({ children }) {
	return (
		<SidebarProvider>
			<Sidebar>
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
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenuButton asChild>
						<Link href="/">
							<FaArrowLeft /> Return to Legekrogen
						</Link>
					</SidebarMenuButton>
				</SidebarFooter>
			</Sidebar>

			<section className="p-4 w-full">{children}</section>
		</SidebarProvider>
	)
}
