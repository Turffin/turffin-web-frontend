"use client"

import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { BookOpen, Clock, Users, TrendingUp } from "lucide-react"

interface CategoryCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color?: string
  moduleCount?: number
  totalDuration?: string
  studentCount?: string
  difficulty?: string
}

export function CategoryCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  color = "bg-primary/10",
  moduleCount = 12,
  totalDuration = "24h",
  studentCount = "2.5k",
  difficulty = "Beginner"
}: CategoryCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-default h-full bg-background">
      <div className="p-6 flex flex-col gap-4 h-full">
        {/* Icon */}
        <div className="flex items-center justify-start">
          <div
            className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}
          >
            <Icon className="w-7 h-7 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="space-y-3">
          {/* Main stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <BookOpen className="w-3 h-3" />
              <span>{moduleCount} modules</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{totalDuration}</span>
            </div>
          </div>

          {/* Secondary stats */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>{studentCount} students</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-green-600 font-medium">{difficulty}</span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-end pt-2 border-t border-border/50">
          {/* View Details button */}
          <Link href={href}>
            <button className="text-xs text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg font-medium transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
