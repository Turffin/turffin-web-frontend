"use client"
import { CategoryCard } from '@/components/cards/category-card'
import { Category } from '@/types/categoryType'
import { categoryList } from '@/utils/categoryList'
import React from 'react'

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground mt-2">Explore your dashboard and manage your content</p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryList.map((category: Category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              href={category.href}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
