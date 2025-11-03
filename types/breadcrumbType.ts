import { LucideIcon } from 'lucide-react'

export interface Breadcrumb {
  label: string
  href: string
  icon?: LucideIcon
  isLast?: boolean
}