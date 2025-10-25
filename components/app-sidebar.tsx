"use client"

import type * as React from "react"
import { Home, Compass, User } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Home,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Compass,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: User,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
      isCollapsible: false,
      isActive: true,
    },
    {
      title: "Explore",
      url: "/explore",
      icon: Compass,
      isCollapsible: false,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: User,
      isCollapsible: false,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
