import type { LucideIcon } from "lucide-react"

export interface Category {
    title: string
    description: string
    icon: LucideIcon
    href: string
    color?: string
}