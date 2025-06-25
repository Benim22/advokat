"use client"

import { Hero } from "@/components/hero"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Scale, Users, Building, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    icon: Scale,
    title: "Brottmål",
    description: "Professionell juridisk representation i brottmål med fokus på att säkerställa dina rättigheter.",
    items: ["Försvarare", "Målsägandebiträde", "Rättshjälp"],
  },
  {
    icon: Users,
    title: "Familje- och arvsrätt",
    description: "Känslig och professionell hantering av familjerättsliga frågor med fokus på barnens bästa.",
    items: ["Vårdnadsmål", "Bodelningar", "Boutredningsman"],
  },
  {
    icon: Building,
    title: "Affärsjuridik",
    description: "Omfattande juridisk rådgivning för företag, entreprenörer och affärsverksamhet.",
    items: ["Bolagsrätt", "Avtalsrätt", "Affärsuppgörelser"],
  },
  {
    icon: Home,
    title: "Fastighetsrätt",
    description: "Expertis inom fastighetsrelaterade juridiska frågor för både privatpersoner och företag.",
    items: ["Fel i fast egendom", "Entreprenadtvister", "Köp och försäljning"],
  },
]

export default function HomePage() {
  return (
    <div>
      <Hero
        title="Juridisk trygghet med personlig service"
        subtitle="Advokat Johan Sjöström erbjuder professionell rådgivning inom alla juridiska områden med över 25 års erfarenhet."
        ctaText="Se våra verksamhetsområden"
        ctaLink="/verksamhet"
        backgroundVideo="https://videocdn.cdnpk.net/videos/db088421-2fea-5ac4-901e-567f52d79cba/horizontal/previews/clear/large.mp4?token=exp=1750878996~hmac=694710a8e31766c37fdaae2f4a7abfd3db5756a6b406e0ba8ca80e46fa3a1436"
      />

      {/* About Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 order-2 lg:order-1">
              <div className="lg:max-w-lg">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-base font-semibold leading-7 text-custom-dark"
                >
                  Om Advokaten
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif"
                >
                  Erfaren juridisk rådgivare
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
                >
                  Med juridikexamen från Lunds universitet 1991 och som ledamot i Sveriges Advokatsamfund sedan 1997,
                  erbjuder Johan Sjöström gedigen juridisk expertis inom flera rättsområden.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8"
                >
                  <Link href="/om">
                    <Button variant="outline" className="bg-white text-custom-dark border-custom-dark hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300">
                      Läs mer om advokaten
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <Image
                src="/images/johan-profile.jpg"
                alt="Advokat Johan Sjöström"
                className="w-full max-w-md mx-auto lg:max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                width={600}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif"
            >
              Våra verksamhetsområden
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
            >
              Vi erbjuder professionell juridisk rådgivning inom flera rättsområden
            </motion.p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-dark">
        <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-serif"
            >
              Behöver du juridisk rådgivning?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300"
            >
              Kontakta oss för en första konsultation. Vi finns tillgängliga på fyra orter i Skåne.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
            >
              <Link href="/kontakt">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Kontakta oss
                </Button>
              </Link>
              <Link
                href="tel:+46708289496"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300 hover:scale-105 transition-all duration-300"
              >
                Ring direkt <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
