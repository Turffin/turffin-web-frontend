"use client"

import * as React from "react"
import { 
  Home, 
  Settings, 
  HelpCircle,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// Learning platform navigation data
const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/home",
      icon: Home,
      isCollapsible: false,
      isActive: true,
    },
  ],
  navSecondary: [
    {
      title: "Help & Support",
      url: "/help",
      icon: HelpCircle,
      isCollapsible: false,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      isCollapsible: false,
    },
  ],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2 group-data-[collapsible=icon]:px-0">
          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-semibold text-sm">Terffin</span>
            <span className="text-xs text-muted-foreground">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* Secondary Navigation */}
        <div className="mt-auto pt-4 border-t border-border">
          <NavMain items={data.navSecondary} />
        </div>
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
