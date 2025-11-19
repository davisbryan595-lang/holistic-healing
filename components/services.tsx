"use client"

import { motion } from "framer-motion"
import { Sparkles, Gem, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Holistic Healing",
    description: "Reiki, Energy Clearing, and Chakra Balancing to restore your natural harmony.",
    icon: Sparkles,
    image: "/reiki-healing-hands-energy-light.jpg",
    price: "From $80",
  },
  {
    title: "Creations & Crafts",
    description: "Handmade Crystal Jewelry, Custom Art, and Intention Tools infused with love.",
    icon: Gem,
    image: "/handmade-crystal-jewelry-amethyst-rose-quartz.jpg",
    price: "Custom Pricing",
  },
  {
    title: "Soul Sessions",
    description: "Tarot Readings, Meditation Guidance, and Workshops for spiritual growth.",
    icon: Heart,
    image: "/tarot-cards-spiritual-reading-candle-light.jpg",
    price: "From $50",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#FFF5EE]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-[#DDA0DD] mb-4">Our Offerings</h2>
          <p className="font-serif text-gray-600 max-w-2xl mx-auto">
            Discover pathways to peace and creativity through our curated services designed to nurture your soul.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#DDA0DD]/10 group-hover:bg-transparent transition-colors" />
                </div>
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-[#FFF5EE] rounded-full flex items-center justify-center mb-4 text-[#FFD700]">
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="font-serif text-2xl text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 font-serif">{service.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center pb-8">
                  <Button variant="outline" className="border-[#DDA0DD] text-[#DDA0DD] hover:bg-[#DDA0DD] hover:text-white">
                    Details & Pricing
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
