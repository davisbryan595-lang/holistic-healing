"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    text: "Arosea's energy shifted my life – pure magic! The reiki session cleared blocks I didn't know I had.",
    author: "Soul Seeker C.",
    rating: 5,
  },
  {
    id: 2,
    text: "The custom necklace she made for me vibrates with such love. I wear it every day for protection.",
    author: "Jessica M.",
    rating: 5,
  },
  {
    id: 3,
    text: "A truly nurturing experience. Her workshop opened my eyes to the power of crystals.",
    author: "Sarah L.",
    rating: 5,
  },
]

export function Reviews() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="reviews" className="py-20 bg-[#DDA0DD]/10 relative">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Quote className="mx-auto text-[#DDA0DD] w-12 h-12 mb-8 opacity-50" />
        
        <div className="h-[200px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-4 text-[#FFD700]">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <p className="font-serif text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                "{reviews[current].text}"
              </p>
              <p className="font-heading text-2xl text-[#DDA0DD]">- {reviews[current].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-[#DDA0DD]" : "bg-[#DDA0DD]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
