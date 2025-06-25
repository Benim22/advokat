"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileCheck, Globe, Stamp, Clock, MapPin, Phone } from "lucide-react"

const services = [
  {
    icon: FileCheck,
    title: "Bestyrkande av handlingar",
    description: "Bestyrkning av kopior av originalhandlingar för officiell användning",
    details: [
      "Kopior av pass och identitetshandlingar",
      "Utbildningsbevis och examensbetyg",
      "Företagshandlingar och registerutdrag",
      "Fullmakter och andra juridiska dokument",
    ],
  },
  {
    icon: Globe,
    title: "Apostille enligt Haagkonventionen",
    description: "Internationell bestyrkning för användning utomlands",
    details: [
      "Apostille för dokument som ska användas utomlands",
      "Bestyrkning enligt Haagkonventionen",
      "Snabb handläggning av internationella ärenden",
      "Rådgivning om internationella krav",
    ],
  },
  {
    icon: Stamp,
    title: "Firmateckningsrätt",
    description: "Bestyrkning av firmateckningsrätt och behörighet",
    details: [
      "Bestyrkning av firmateckningsrätt",
      "Verifiering av behörighet att företräda bolag",
      "Handlingar för internationella affärer",
      "Bolagsrättsliga bestyrningar",
    ],
  },
]

export default function NotariusPage() {
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
            Notarius Publicus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
          >
            Johan Sjöström är utsedd som Notarius Publicus i Trelleborg och erbjuder officiella bestyrkningstjänster.
          </motion.p>
        </div>

        {/* What is Notarius Publicus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-4xl"
        >
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl sm:text-2xl">Vad är Notarius Publicus?</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Notarius Publicus är en offentlig tjänsteman som utses av Domstolsverket för att utföra officiella
                bestyrkningstjänster. Som Notarius Publicus har Johan Sjöström befogenhet att bestyrka kopior av
                handlingar och utföra andra officiella notarieuppdrag.
              </p>
              <p>
                Dessa tjänster är särskilt viktiga när dokument ska användas utomlands eller i officiella sammanhang där
                bestyrkt kopia krävs. Notarius Publicus-stämpeln ger dokumenten officiell status och accepteras
                internationellt.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Services */}
        <div className="mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif mb-12 sm:mb-16 lg:mb-20"
          >
            Våra Notarietjänster
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gray-100 rounded-lg flex-shrink-0">
                        <service.icon className="h-6 w-6 text-custom-dark" />
                      </div>
                      <CardTitle className="font-serif text-lg sm:text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-custom-dark rounded-full mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process and Requirements */}
        <div className="mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Clock className="h-5 w-5 text-custom-dark flex-shrink-0" />
                    Så går det till
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-custom-dark text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <p className="text-sm text-gray-600">Kontakta oss för att boka tid</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-custom-dark text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <p className="text-sm text-gray-600">Ta med originalhandlingar och giltig legitimation</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-custom-dark text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <p className="text-sm text-gray-600">Vi granskar och bestyrker dokumenten</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-custom-dark text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <p className="text-sm text-gray-600">Du får dina bestyrka kopior direkt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-custom-dark flex-shrink-0" />
                    Praktisk information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vad du behöver ta med:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Originalhandlingar som ska bestyrkas</li>
                      <li>• Giltig fotolegitimation (pass eller körkort)</li>
                      <li>• Information om vad dokumenten ska användas till</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Öppettider:</h4>
                    <p className="text-sm text-gray-600">Efter överenskommelse</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Plats:</h4>
                    <p className="text-sm text-gray-600">Strandgatan 2, Trelleborg</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-serif">
            Behöver du notarietjänster?
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Kontakta oss för att boka tid eller få mer information om våra notarietjänster.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-custom-dark hover:bg-custom-dark-hover hover:scale-105 hover:shadow-lg transition-all duration-300"
              onClick={() => alert("Kontaktformulär för notarietjänster öppnas här")}
            >
              Boka tid
            </Button>
            <a
              href="tel:+46708289496"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 hover:text-custom-dark hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Ring direkt
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
