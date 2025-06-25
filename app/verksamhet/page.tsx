"use client"

import { ServiceCard } from "@/components/service-card"
import { motion } from "framer-motion"
import { Scale, Users, Building, Home, Shield, FileText, Gavel, HandHeart } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Scale,
    title: "Brottmål",
    description:
      "Professionell juridisk representation i alla typer av brottmål med fokus på att säkerställa dina rättigheter.",
    items: [
      "Försvarare i brottmål",
      "Målsägandebiträde",
      "Rättshjälp och juridisk rådgivning",
      "Representation vid förhör",
      "Överklaganden och processer",
    ],
  },
  {
    icon: Users,
    title: "Familje- och arvsrätt",
    description: "Känslig och professionell hantering av familjerättsliga frågor med fokus på barnens bästa.",
    items: [
      "Vårdnadsmål och umgängesrätt",
      "Bodelningar vid skilsmässa",
      "Boutredningsman och arvskiften",
      "Äktenskapsförord och samboavtal",
      "Adoption och faderskapsärenden",
    ],
  },
  {
    icon: Building,
    title: "Affärsjuridik",
    description: "Omfattande juridisk rådgivning för företag, entreprenörer och affärsverksamhet.",
    items: [
      "Bolagsrätt och bolagsbildning",
      "Avtalsrätt och kontraktsupprättning",
      "Affärsuppgörelser och förhandlingar",
      "Företagsöverlåtelser",
      "Kommersiella tvister",
    ],
  },
  {
    icon: Home,
    title: "Fastighetsrätt",
    description: "Expertis inom fastighetsrelaterade juridiska frågor för både privatpersoner och företag.",
    items: [
      "Fel i fast egendom och köprätt",
      "Entreprenadtvister och byggfel",
      "Fastighetsköp och försäljning",
      "Hyresrätt och arrendetvister",
      "Granntvist och servitut",
    ],
  },
]

const additionalServices = [
  {
    icon: Shield,
    title: "Försäkringsrätt",
    description: "Hjälp med försäkringsärenden och tvister mot försäkringsbolag.",
  },
  {
    icon: FileText,
    title: "Avtalsrätt",
    description: "Upprättande och granskning av alla typer av avtal och kontrakt.",
  },
  {
    icon: Gavel,
    title: "Processrätt",
    description: "Representation i domstol och juridiska processer.",
  },
  {
    icon: HandHeart,
    title: "Personskaderätt",
    description: "Juridisk hjälp vid personskador och skadeståndsärenden.",
  },
]

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 font-serif"
          >
            Verksamhetsområden
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
          >
            Vi erbjuder professionell juridisk rådgivning inom flera rättsområden med fokus på personlig service och
            kvalitet.
          </motion.p>
        </div>

        {/* Main Services */}
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif">
              Ytterligare tjänster
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Vi erbjuder även juridisk rådgivning inom dessa områden
            </p>
          </motion.div>

          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="relative p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4 flex-shrink-0">
                    <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
                      <service.icon className="h-6 w-6 text-custom-dark" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 flex-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif">
            Behöver du juridisk rådgivning?
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Kontakta oss för en första konsultation. Vi erbjuder personlig service och professionell rådgivning.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Link href="/kontakt">
              <button className="w-full sm:w-auto rounded-md bg-custom-dark px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-custom-dark-hover hover:scale-105 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-dark transition-all duration-300">
                Kontakta oss
              </button>
            </Link>
            <a
              href="tel:+46708289496"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-custom-dark hover:scale-105 transition-all duration-300"
            >
              Ring direkt <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
