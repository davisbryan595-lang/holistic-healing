"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-[#FFF5EE]/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFD700] group-hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] transition-shadow">
             <img 
               src="/mystical-logo-purple-flower.jpg" 
               alt="Arosea Logo" 
               className="object-cover w-full h-full"
             />
          </div>
          <span className={`font-heading text-2xl md:text-3xl ${isScrolled ? "text-[#DDA0DD]" : "text-[#DDA0DD] md:text-white md:drop-shadow-md"}`}>
            arosea's Creations & Holistic Healing
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-serif text-lg transition-colors hover:text-[#FFD700] ${
                isScrolled ? "text-gray-800" : "text-white drop-shadow-sm"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-[#FFD700] text-gray-900 hover:bg-[#FFD700]/90 font-serif rounded-full px-6"
          >
            <Link href="#book">Book Session</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#DDA0DD]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#FFF5EE] shadow-lg p-6 md:hidden flex flex-col gap-4 items-center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-serif text-xl text-gray-800 hover:text-[#DDA0DD]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-[#FFD700] text-gray-900 hover:bg-[#FFD700]/90 w-full font-serif"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Link href="#book">Book Session</Link>
          </Button>
        </motion.div>
      )}
    </motion.nav>
  )
}
