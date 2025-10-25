import { BarChart3, Users, ShoppingCart, MessageSquare, Lock, Palette } from "lucide-react"

export const categoryList = [
    {
      title: "Analytics",
      description: "Track and analyze your performance metrics",
      icon: BarChart3,
      href: "/dashboard/analytics",
      color: "bg-blue-500/10",
    },
    {
      title: "Users",
      description: "Manage and view user information",
      icon: Users,
      href: "/dashboard/users",
      color: "bg-purple-500/10",
    },
    {
      title: "Products",
      description: "Browse and manage your product catalog",
      icon: ShoppingCart,
      href: "/dashboard/products",
      color: "bg-green-500/10",
    },
    {
      title: "Messages",
      description: "View and respond to messages",
      icon: MessageSquare,
      href: "/dashboard/messages",
      color: "bg-orange-500/10",
    },
    {
      title: "Security",
      description: "Manage security and access controls",
      icon: Lock,
      href: "/dashboard/security",
      color: "bg-red-500/10",
    },
    {
      title: "Customization",
      description: "Personalize your dashboard experience",
      icon: Palette,
      href: "/dashboard/customize",
      color: "bg-pink-500/10",
    },
  ]