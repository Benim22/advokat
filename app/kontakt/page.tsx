"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    details: ["+46 (0)708-28 94 96"],
    description: "Ring för akuta ärenden eller bokning av tid",
  },
  {
    icon: Mail,
    title: "E-post",
    details: ["johan@advjs.se", "info@advjs.se"],
    description: "Skicka ditt ärende via e-post",
  },
  {
    icon: MapPin,
    title: "Huvudkontor",
    details: ["Strandgatan 2", "231 45 Trelleborg"],
    description: "Vårt huvudkontor i Trelleborg",
  },
  {
    icon: Clock,
    title: "Öppettider",
    details: ["Mån-Fre 08:00-17:00", "Efter överenskommelse"],
    description: "Kontakta oss för att boka tid",
  },
]

const offices = [
  { city: "Trelleborg", address: "Strandgatan 2", postalCode: "231 45 Trelleborg", type: "Huvudkontor" },
  { city: "Malmö", address: "Besöksadress efter överenskommelse", postalCode: "", type: "Mottagning" },
  { city: "Landskrona", address: "Besöksadress efter överenskommelse", postalCode: "", type: "Mottagning" },
  { city: "Helsingborg", address: "Besöksadress efter överenskommelse", postalCode: "", type: "Mottagning" },
]

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold tracking-tight text-gray-900"
          >
            Kontakta oss
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
          >
            Vi finns tillgängliga på fyra orter i Skåne. Kontakta oss för juridisk rådgivning eller notarietjänster.
          </motion.p>
        </div>

        {/* Kontaktuppgifter */}
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full"
            >
              <div className="flex flex-col gap-4 rounded-lg border p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <item.icon className="h-6 w-6 text-custom-dark flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Besöksadresser */}
        <div className="mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-2xl lg:max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-gray-900 text-center"
          >
            Våra mottagningar
          </motion.h2>
          <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full"
              >
                <div className="rounded-lg border p-6 shadow-sm h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">{o.city}</h3>
                  <p className="text-sm text-gray-600 flex-1">{o.address}</p>
                  {o.postalCode && <p className="text-sm text-gray-600">{o.postalCode}</p>}
                  <p className="mt-2 text-xs text-gray-500">{o.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kontaktformulär + karta */}
        <div className="mx-auto mt-24 sm:mt-32 lg:mt-40 grid max-w-2xl grid-cols-1 gap-8 lg:gap-12 lg:max-w-none lg:grid-cols-2">
          <ContactForm />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-sm ring-1 ring-gray-200 h-full min-h-[400px]"
          >
            {/* Google Maps iframe */}
            <iframe
              title="Karta Strandgatan 2 Trelleborg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.8436461146596!2d13.1558!3d55.3745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653b0517d0e0ca1%3A0x123456789abcdef!2sStrandgatan%202%2C%20Trelleborg!5e0!3m2!1ssv!2sse!4v0000000000000"
              width="100%"
              height="100%"
              className="h-full w-full border-0 min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
