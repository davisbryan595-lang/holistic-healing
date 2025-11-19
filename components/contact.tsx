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
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* YouTube Preview */}
          <div className="bg-white rounded-2xl border border-[#DDA0DD]/20 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF0000] to-[#FF6666] p-4">
              <h3 className="font-heading text-xl text-white flex items-center gap-2">
                <Youtube size={24} />
                Latest Videos
              </h3>
            </div>
            <div className="p-4 bg-[#FFF5EE] h-[450px]">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/@AROSEASCREATIONS420/videos"
                title="YouTube Channel"
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
            <div className="p-4 bg-[#FFF5EE] h-[450px]">
              <div
                className="fb-page rounded-lg overflow-hidden h-full"
                data-href="https://www.facebook.com/profile.php?id=100091079950390&sk=reels_tab"
                data-tabs="timeline"
                data-width="100%"
                data-height="450"
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
