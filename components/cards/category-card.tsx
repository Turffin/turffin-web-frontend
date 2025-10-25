"use client"

import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color?: string
}

export function CategoryCard({ title, description, icon: Icon, href, color = "bg-primary/10" }: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 cursor-pointer h-full">
        <div className="p-6 flex flex-col gap-4">
          <div
            className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
          <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore
            <span>→</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
