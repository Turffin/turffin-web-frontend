'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Breadcrumb } from '@/types/breadcrumbType'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Bell, 
  Search, 
  Settings, 
  LogOut, 
  User, 
  Menu,
  X,
  BookOpen,
  Trophy,
  Calendar,
  ChevronRight,
  Home,
  PanelLeft
} from 'lucide-react'
import { clearToken } from '@/lib/auth'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  
  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: null
  }

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = (): Breadcrumb[] => {
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs: Breadcrumb[] = []
    
    // Always start with Home
    breadcrumbs.push({
      label: 'Home',
      href: '/home',
      icon: Home,
      isLast: segments.length === 0
    })
    
    // Add other segments
    segments.forEach((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/')
      const label = segment.charAt(0).toUpperCase() + segment.slice(1)
      
      breadcrumbs.push({
        label,
        href,
        isLast: index === segments.length - 1
      } as Breadcrumb)
    })
    
    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  const handleLogout = () => {
    clearToken()
    router.push('/login')
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Breadcrumbs with Integrated Search */}
          <div className="flex items-center gap-4 flex-1">
            {/* Sidebar Toggle */}
            <SidebarTrigger className="h-9 w-9 rounded-lg hover:bg-gray-100" />
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-1 text-sm">
              {breadcrumbs.map((breadcrumb, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                  )}
                  {breadcrumb?.isLast ? (
                    <span className="text-gray-900 font-medium flex items-center gap-1">
                      {breadcrumb.icon && <breadcrumb.icon className="w-4 h-4" />}
                      {breadcrumb.label}
                    </span>
                  ) : (
                    <Link 
                      href={breadcrumb.href} 
                      className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
                    >
                      {breadcrumb.icon && <breadcrumb.icon className="w-4 h-4" />}
                      {breadcrumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Compact Search - Integrated with breadcrumbs */}
            <div className="hidden md:flex items-center ml-6">
              <div className="relative group">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5 h-3.5 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 pl-7 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs"
                />
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Stats */}
            <div className="hidden lg:flex items-center gap-4 px-4 py-2 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">12</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">3</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">5</span>
              </div>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-xl hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-xl hover:bg-gray-100 p-0">
                  <Avatar className="h-10 w-10 ring-2 ring-gray-200">
                    <AvatarImage src={user?.avatar || undefined} alt={user?.name} />
                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-teal-600 text-white font-semibold">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2" align="end" forceMount>
                <DropdownMenuLabel className="p-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.avatar || undefined} alt={user?.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                        {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{user?.name || 'User'}</p>
                      <p className="text-xs text-gray-500">{user?.email || 'user@example.com'}</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-50">
                  <User className="mr-3 h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-50">
                  <Settings className="mr-3 h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-3 rounded-lg hover:bg-red-50 text-red-600" onClick={handleLogout}>
                  <LogOut className="mr-3 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-10 w-10 rounded-xl hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            <div className="px-6 py-4 space-y-4">
              {/* Mobile Breadcrumbs */}
              <nav className="flex items-center space-x-1 text-sm">
                {breadcrumbs.map((breadcrumb, index) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight className="w-3 h-3 text-gray-400 mx-1" />
                    )}
                    {breadcrumb.isLast ? (
                      <span className="text-gray-900 font-medium flex items-center gap-1 text-xs">
                        {breadcrumb.icon && <breadcrumb.icon className="w-3 h-3" />}
                        {breadcrumb.label}
                      </span>
                    ) : (
                      <Link 
                        href={breadcrumb.href} 
                        className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1 text-xs"
                      >
                        {breadcrumb.icon && <breadcrumb.icon className="w-3 h-3" />}
                        {breadcrumb.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-7 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 text-xs"
                />
              </div>

              {/* Mobile Stats */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">12 Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700">3 Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">5 Due</span>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start p-3 rounded-xl hover:bg-gray-50">
                  <Bell className="mr-3 h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">Notifications</span>
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start p-3 rounded-xl hover:bg-gray-50">
                  <Settings className="mr-3 h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">Settings</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start p-3 rounded-xl hover:bg-gray-50">
                  <User className="mr-3 h-4 w-4 text-gray-600" />
                  <span className="text-gray-700">Profile</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start p-3 rounded-xl hover:bg-red-50 text-red-600" onClick={handleLogout}>
                  <LogOut className="mr-3 h-4 w-4" />
                  <span>Log out</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
