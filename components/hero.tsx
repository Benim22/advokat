"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  backgroundVideo?: string
}

export function Hero({ title, subtitle, ctaText, ctaLink, backgroundVideo }: HeroProps) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
      {/* Video Background */}
      {backgroundVideo && (
        <div className="absolute inset-0 -z-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.log("Video failed to load, falling back to gradient background")
              e.currentTarget.style.display = "none"
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Gradient Background (fallback or default) */}
      <div
        className={`absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 ${
          backgroundVideo ? "opacity-50" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-200 to-gray-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl font-bold tracking-tight sm:text-6xl font-serif ${
              backgroundVideo ? "text-white drop-shadow-lg" : "text-gray-900"
            }`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mt-6 text-lg leading-8 ${backgroundVideo ? "text-gray-100 drop-shadow-md" : "text-gray-600"}`}
          >
            {subtitle}
          </motion.p>
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link href={ctaLink}>
                <Button
                  size="lg"
                  className={`${
                    backgroundVideo
                      ? "bg-white text-custom-dark hover:bg-gray-100 shadow-lg hover:scale-105 transition-all duration-300"
                      : "bg-custom-dark hover:bg-custom-dark-hover hover:scale-105 hover:shadow-lg transition-all duration-300"
                  }`}
                >
                  {ctaText}
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
