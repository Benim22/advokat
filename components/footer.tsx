import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-custom-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-13 w-13 hover:scale-105 transition-transform duration-300"
              src="/logoo2.png"
              alt="Advokat Johan Sjöström"
              width={160}
              height={64}
            />
            <p className="text-sm leading-6 text-gray-300">
              Juridisk trygghet med personlig service. Medlem av Sveriges Advokatsamfund.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="/" className="text-sm leading-6 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300">
                    Hem
                  </Link>
                </li>
                <li>
                  <Link href="/om" className="text-sm leading-6 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300">
                    Om mig
                  </Link>
                </li>
                <li>
                  <Link href="/verksamhet" className="text-sm leading-6 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300">
                    Verksamhetsområden
                  </Link>
                </li>
                <li>
                  <Link href="/notarius" className="text-sm leading-6 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300">
                    Notarius Publicus
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Kontakt</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm text-gray-300">+46 (0)708-28 94 96</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm text-gray-300">johan@advjs.se</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm text-gray-300">Strandgatan 2, Trelleborg</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-custom-dark-light pt-8">
          <p className="text-xs leading-5 text-gray-300">
            &copy; {new Date().getFullYear()} Advokat Johan Sjöström AB – Medlem av Sveriges Advokatsamfund
          </p>
        </div>
      </div>
    </footer>
  )
}
