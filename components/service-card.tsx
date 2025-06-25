"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  items?: string[]
  index: number
}

export function ServiceCard({ icon: Icon, title, description, items, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg hover:scale-105 transition-all duration-300">
        <CardHeader className="flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
              <Icon className="h-6 w-6 text-custom-dark" />
            </div>
            <CardTitle className="font-serif text-lg sm:text-xl">{title}</CardTitle>
          </div>
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          {items && (
            <ul className="space-y-2 mb-6 flex-1">
              {items.map((item, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-custom-dark rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <Link href="/kontakt">
            <Button
              variant="outline"
              className="w-full bg-white text-custom-dark border-custom-dark hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 mt-auto"
            >
              Kontakta för rådgivning
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}
