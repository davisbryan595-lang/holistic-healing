"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from 'lucide-react'

const galleryItems = [
  { id: 1, category: "Healing", src: "/crystal-grid-healing-setup.jpg", title: "Crystal Grid Setup" },
  { id: 2, category: "Creations", src: "/rose-quartz-necklace-handmade.jpg", title: "Rose Quartz Necklace" },
  { id: 3, category: "Healing", src: "/sound-bath-bowls-meditation.jpg", title: "Sound Bath Session" },
  { id: 4, category: "Creations", src: "/amethyst-dreamcatcher-handmade.jpg", title: "Amethyst Dreamcatcher" },
  { id: 5, category: "Client Stories", src: "/happy-woman-holding-crystals.jpg", title: "Client Joy" },
  { id: 6, category: "Creations", src: "/sage-smudge-stick-bundle.jpg", title: "Sage Bundles" },
]

const categories = ["All", "Healing", "Creations", "Client Stories"]

export function Gallery() {
  const [filter, setFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <section id="gallery" className="py-20 px-4 bg-[#FFF5EE]">
      <div className="container mx-auto">
        <h2 className="font-heading text-5xl text-center text-[#DDA0DD] mb-8">Moments of Magic</h2>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-serif transition-all ${
                filter === cat 
                  ? "bg-[#DDA0DD] text-white shadow-md" 
                  : "bg-white text-gray-600 hover:bg-[#DDA0DD]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={item.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-serif text-lg italic">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-4 right-4 text-white hover:text-[#FFD700]">
                <X size={32} />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative max-w-4xl max-h-[90vh] bg-white p-2 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[85vh] object-contain rounded"
                />
                <p className="text-center mt-2 font-serif text-[#DDA0DD]">{selectedImage.title}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
