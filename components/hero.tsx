"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/mystical-crystal-healing-reiki-atmosphere-purple-g.jpg"
          alt="Mystical Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FFF5EE]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl text-[#FFD700] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mb-4"
        >
          Arosea's Creations
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-2xl md:text-4xl text-white/90 mb-2 tracking-wide"
        >
          & Holistic Healing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-serif text-lg md:text-xl text-[#DDA0DD] italic mb-8 drop-shadow-md"
        >
          Awaken Your Divine Spark
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-[#FFD700] text-gray-900 hover:bg-[#FFD700]/90 rounded-full px-8 text-lg font-serif min-w-[200px]"
          >
            <Link href="#services">Explore Offerings</Link>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-[#DDA0DD] text-[#DDA0DD] hover:bg-[#DDA0DD] hover:text-white bg-black/20 backdrop-blur-sm rounded-full px-8 text-lg font-serif min-w-[200px]"
          >
            <Link href="#book">Book Healing</Link>
          </Button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-32 h-32 bg-[#DDA0DD]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/3 right-10 w-40 h-40 bg-[#FFD700]/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}
