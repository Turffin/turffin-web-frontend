"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Play, Clock, Users } from "lucide-react"
import Image from "next/image"

interface VideoCardProps {
  title: string
  description: string
  thumbnail?: string
  duration: string
  videoCount: number
  totalDuration: string
  studentCount: string
  progress?: number
  href: string
}

export function VideoCard({ 
  title, 
  description, 
  thumbnail, 
  duration, 
  videoCount, 
  totalDuration, 
  studentCount, 
  progress = 0,
  href 
}: VideoCardProps) {
  return (
    <Link href={href}>
      <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-pointer h-full bg-background">
        {/* Video thumbnail area */}
        <div className="relative h-32 bg-muted/50 overflow-hidden">
          {thumbnail ? (
            <Image 
              src={thumbnail} 
              alt={title}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <Play className="w-12 h-12 text-primary/70" />
            </div>
          )}
          
          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-primary ml-0.5" />
            </div>
          </div>
          
          {/* Video duration badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="font-semibold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Video stats */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Play className="w-3 h-3" />
                <span>{videoCount} videos</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{totalDuration}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{studentCount}</span>
            </div>
          </div>

          {/* Progress bar */}
          {progress > 0 && (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div 
                  className="bg-primary h-1.5 rounded-full transition-all duration-300 group-hover:bg-primary/80" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}
