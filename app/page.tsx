import { Preloader } from "@/components/preloader"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Reviews />
      <Booking />
      <Footer />
      
      {/* Floating Chat Button */}
      <a
        href="https://www.facebook.com/profile.php?id=100091079950390"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#FFD700] text-gray-900 p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce"
        aria-label="Chat on Facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </a>
    </main>
  )
}
