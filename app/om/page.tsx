"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Scale, MapPin, Users } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Juridikexamen",
    description: "Lunds universitet, 1991",
  },
  {
    icon: Scale,
    title: "Advokatsamfund",
    description: "Ledamot sedan 1997",
  },
  {
    icon: MapPin,
    title: "Fyra orter",
    description: "Trelleborg, Malmö, Landskrona, Helsingborg",
  },
  {
    icon: Users,
    title: "Kontorsgemenskap",
    description: "Tillsammans med Johanna Fröberg",
  },
]

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 font-serif"
          >
            Om Advokat Johan Sjöström
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700"
          >
            Erfaren allmänpraktiserande advokat med över 25 års juridisk expertis
          </motion.p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <Image
              src="/images/johan-profile.jpg"
              alt="Advokat Johan Sjöström"
              className="aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl object-cover shadow-xl"
              width={600}
              height={750}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pt-4 order-1 lg:order-2"
          >
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-lg">
                Johan Sjöström är en erfaren allmänpraktiserande advokat med gedigen juridisk bakgrund och mångårig
                erfarenhet inom flera rättsområden.
              </p>
              <p className="mt-6">
                Efter att ha tagit sin juridikexamen vid Lunds universitet 1991 blev Johan ledamot i Sveriges
                Advokatsamfund 1997. Sedan dess har han byggt upp en bred praktik med fokus på personlig service och
                professionell rådgivning.
              </p>
              <p className="mt-6">
                Johan arbetar i kontorsgemenskap med Johanna Fröberg och erbjuder mottagning på fyra orter i Skåne för
                att vara tillgänglig för klienter i hela regionen.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif"
          >
            Bakgrund & Kvalifikationer
          </motion.h2>
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-custom-dark" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 flex-1">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif">
              Erfarenhet & Expertis
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Med över två decennier i advokatbranschen har Johan utvecklat djup expertis inom flera juridiska områden.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-2xl lg:max-w-4xl"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialområden</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-custom-dark rounded-full mt-2.5 flex-shrink-0" />
                    <span>Brottmål - Försvarare och målsägandebiträde</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-custom-dark rounded-full mt-2.5 flex-shrink-0" />
                    <span>Familje- och arvsrätt - Vårdnadsmål och bodelningar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-custom-dark rounded-full mt-2.5 flex-shrink-0" />
                    <span>Affärsjuridik - Bolagsrätt och avtalsrätt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-custom-dark rounded-full mt-2.5 flex-shrink-0" />
                    <span>Fastighetsrätt - Fel i fast egendom och entreprenadtvister</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tillgänglighet</h3>
                <p className="text-gray-600 mb-4">
                  För att vara tillgänglig för klienter i hela Skåne erbjuder Johan mottagning på fyra strategiskt
                  placerade orter:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Trelleborg (huvudkontor)</li>
                  <li>• Malmö</li>
                  <li>• Landskrona</li>
                  <li>• Helsingborg</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
