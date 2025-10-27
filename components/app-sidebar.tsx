"use client"

import * as React from "react"
import { 
  Home, 
  BookOpen, 
  PlayCircle, 
  Award, 
  Clock, 
  Settings, 
  HelpCircle,
  TrendingUp,
  Users,
  Calendar,
  Download,
  Star,
  List,
  Languages,
  Video,
  ArrowUpDown,
  Mic,
  Volume2,
  Brain,
  Dumbbell,
  Target,
  Gamepad2,
  MessageSquare,
  Tag,
  Loader2
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"
import { useCategories } from "@/hooks/use-categories"

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
  navMainCategories: [] as {
    title: string
    url: string
    icon: any
    isCollapsible: boolean
    isActive: boolean
  }[],
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


// Function to map category names to appropriate icons
const getCategoryIcon = (categoryName: string) => {
  const iconMap: { [key: string]: any } = {
    'Language': Languages,
    'Skill Video': Video,
    'Matching, Sorting & Ordering': ArrowUpDown,
    'Vocal Imitation': Mic,
    'Articulation Video-Flashcards': Volume2,
    'Motor Skills': Dumbbell,
    'Intensive Articulation': Target,
    'Independent Play Skills': Gamepad2,
    'Requesting Skills': MessageSquare,
    'Labeling Skills': Tag,
  }
  
  return iconMap[categoryName] || BookOpen
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: categories, isLoading } = useCategories()
  
  const navMainWithCategories = React.useMemo(() => {
    categories?.data.forEach((category) => {
      data.navMainCategories.push({
        title: category.name,
        url: `/categories/${category.id}`,
        icon: getCategoryIcon(category.name),
        isCollapsible: false,
        isActive: false,
      })
    })
    return [...data.navMain, ...data.navMainCategories]
  }, [categories])
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2 group-data-[collapsible=icon]:px-0">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-semibold text-sm">EduLearn</span>
            <span className="text-xs text-muted-foreground">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <NavMain items={ navMainWithCategories} />}
        {/* Secondary Navigation */}
        <div className="mt-auto pt-4 border-t border-border">
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <NavMain items={data.navSecondary} />}
        </div>
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
