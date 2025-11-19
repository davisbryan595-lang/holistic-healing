"use client"

import { Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Link from "next/link"
import { useEffect } from 'react'

export function Contact() {
  useEffect(() => {
    // Load Facebook SDK for embedded posts
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
      FB.XFBML.parse();
    };

    // Load FB SDK script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [])

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-heading text-5xl text-center text-[#DDA0DD] mb-12">Get in Touch</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <div className="bg-[#FFF5EE] p-8 rounded-2xl border border-[#DDA0DD]/20 shadow-lg h-fit">
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

              <div className="pt-6 border-t border-[#DDA0DD]/20">
                <p className="font-serif text-gray-600 mb-4">
                  Connect with us on our social channels for daily inspiration and healing tips.
                </p>
                <div className="space-y-3">
                  <Link
                    href="https://www.youtube.com/@AROSEASCREATIONS420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#DDA0DD]/20 hover:border-[#DDA0DD] hover:shadow-md transition-all group"
                  >
                    <Youtube className="text-[#FF0000] flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <span className="font-serif text-sm text-gray-800">YouTube</span>
                  </Link>

                  <Link
                    href="https://www.facebook.com/people/Aroseas-Creations-Holistic-Healing/100091079950390/?sk=reels_tab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#DDA0DD]/20 hover:border-[#DDA0DD] hover:shadow-md transition-all group"
                  >
                    <svg className="text-[#1877F2] flex-shrink-0 group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-serif text-sm text-gray-800">Facebook</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Preview */}
          <div className="bg-white rounded-2xl border border-[#DDA0DD]/20 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF0000] to-[#FF6666] p-4">
              <h3 className="font-heading text-xl text-white flex items-center gap-2">
                <Youtube size={24} />
                Latest Videos
              </h3>
            </div>
            <div className="p-4 bg-[#FFF5EE]">
              <iframe
                className="w-full rounded-lg"
                height="400"
                src="https://www.youtube.com/embed?listType=user_uploads&list=AROSEASCREATIONS420"
                title="YouTube Video Embed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Facebook Preview */}
          <div className="bg-white rounded-2xl border border-[#DDA0DD]/20 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#1877F2] to-[#0A66C2] p-4">
              <h3 className="font-heading text-xl text-white flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Recent Posts
              </h3>
            </div>
            <div className="p-4 bg-[#FFF5EE]">
              <div
                className="fb-page rounded-lg overflow-hidden"
                data-href="https://www.facebook.com/people/Aroseas-Creations-Holistic-Healing/100091079950390"
                data-tabs="timeline"
                data-width="100%"
                data-height="400"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
