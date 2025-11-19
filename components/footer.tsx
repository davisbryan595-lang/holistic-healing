import { Facebook, Instagram, Mail, MapPin } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#DDA0DD] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          <div>
            <h3 className="font-heading text-4xl mb-4 text-[#FFD700]">Arosea's Creations</h3>
            <p className="font-serif text-white/90 mb-6">
              Nurturing souls worldwide through holistic healing and handcrafted treasures.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100091079950390" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-full hover:bg-[#FFD700] hover:text-[#DDA0DD] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/20 p-2 rounded-full hover:bg-[#FFD700] hover:text-[#DDA0DD] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:contact@arosea.com" 
                className="bg-white/20 p-2 rounded-full hover:bg-[#FFD700] hover:text-[#DDA0DD] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-4 text-[#FFD700]">Quick Links</h4>
            <ul className="space-y-2 font-serif">
              <li><Link href="#home" className="hover:text-[#FFD700] transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-[#FFD700] transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="hover:text-[#FFD700] transition-colors">Gallery</Link></li>
              <li><Link href="#book" className="hover:text-[#FFD700] transition-colors">Book Session</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-4 text-[#FFD700]">Contact</h4>
            <ul className="space-y-4 font-serif">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} className="text-[#FFD700]" />
                <span>Virtual & In-Person (Location TBD)</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} className="text-[#FFD700]" />
                <span>contact@arosea.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center font-serif text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Arosea's Creations & Holistic Healing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
