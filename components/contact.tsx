import { Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-5xl text-center text-[#DDA0DD] mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-[#FFF5EE] p-8 rounded-2xl border border-[#DDA0DD]/20 shadow-lg">
            <h3 className="font-heading text-3xl text-[#FFD700] mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-[#DDA0DD] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-serif font-bold text-gray-800">Email</p>
                  <a href="mailto:contact@arosea.com" className="font-serif text-gray-600 hover:text-[#DDA0DD] transition-colors">
                    contact@arosea.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#DDA0DD] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-serif font-bold text-gray-800">Location</p>
                  <p className="font-serif text-gray-600">Virtual & In-Person Services</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#DDA0DD] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-serif font-bold text-gray-800">Availability</p>
                  <p className="font-serif text-gray-600">Monday - Sunday by appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube & Social Card */}
          <div className="bg-[#FFF5EE] p-8 rounded-2xl border border-[#DDA0DD]/20 shadow-lg">
            <h3 className="font-heading text-3xl text-[#FFD700] mb-8">Follow the Journey</h3>
            
            <p className="font-serif text-gray-600 mb-8">
              Connect with us on our social channels for daily inspiration, healing tips, and exclusive content.
            </p>

            <div className="space-y-4">
              <Link
                href="https://www.youtube.com/@AROSEASCREATIONS420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#DDA0DD]/20 hover:border-[#DDA0DD] hover:shadow-md transition-all group"
              >
                <Youtube className="text-[#FF0000] flex-shrink-0 group-hover:scale-110 transition-transform" size={28} />
                <div>
                  <p className="font-serif font-bold text-gray-800">YouTube</p>
                  <p className="font-serif text-sm text-gray-600">@AROSEASCREATIONS420</p>
                </div>
              </Link>

              <Link
                href="https://www.facebook.com/people/Aroseas-Creations-Holistic-Healing/100091079950390/?sk=reels_tab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#DDA0DD]/20 hover:border-[#DDA0DD] hover:shadow-md transition-all group"
              >
                <svg className="text-[#1877F2] flex-shrink-0 group-hover:scale-110 transition-transform" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div>
                  <p className="font-serif font-bold text-gray-800">Facebook Reels</p>
                  <p className="font-serif text-sm text-gray-600">Arosea's Creations</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
