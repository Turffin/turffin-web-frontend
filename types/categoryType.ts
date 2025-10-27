import type { LucideIcon } from "lucide-react"

export interface Category {
    id: number,
    name: string,
    description: string,
    priority: number,
    app_thumbnail: string,
    web_thumbnail: string,
    published: boolean,
    accessible: boolean,
    created_at: string,
    updated_at: string
}