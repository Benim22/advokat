"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.")
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Skicka meddelande</CardTitle>
          <CardDescription>Fyll i formuläret så återkommer vi så snart som möjligt.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Namn</Label>
                <Input id="name" placeholder="Ditt namn" required />
              </div>
              <div>
                <Label htmlFor="email">E-post</Label>
                <Input id="email" type="email" placeholder="din@email.se" required />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Ämne</Label>
              <Input id="subject" placeholder="Vad gäller ditt ärende?" />
            </div>
            <div>
              <Label htmlFor="message">Meddelande</Label>
              <Textarea id="message" placeholder="Beskriv ditt ärende..." className="min-h-[120px]" required />
            </div>
            <Button type="submit" className="w-full bg-custom-dark hover:bg-custom-dark-hover hover:scale-105 hover:shadow-lg transition-all duration-300">
              Skicka meddelande
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
