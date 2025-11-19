import type { Metadata } from "next"
import { Great_Vibes, Lora } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
})

const lora = Lora({ 
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Arosea's Creations & Holistic Healing | Reiki & Crystal Art",
  description: "Handcrafted Creations, Soulful Healing, and Eternal Balance. Join us for Reiki, Crystal Jewelry, and Spiritual Guidance.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-[#FFF5EE] font-serif antialiased selection:bg-[#DDA0DD] selection:text-white",
        greatVibes.variable,
        lora.variable
      )}>
        {children}
      </body>
    </html>
  )
}
