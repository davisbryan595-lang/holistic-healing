"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Booking() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="book" className="py-20 px-4 bg-[#FFF5EE] text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-[#DDA0DD]/20">
          <h3 className="font-heading text-4xl text-[#DDA0DD] mb-4">Thank You!</h3>
          <p className="font-serif text-gray-600 mb-6">
            Your healing journey begins. We'll align soon to confirm your session.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#FFD700] text-gray-900 hover:bg-[#FFD700]/90"
          >
            Book Another
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="book" className="py-20 px-4 bg-[#FFF5EE]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl md:text-6xl text-[#DDA0DD] mb-4">Ready to Bloom?</h2>
          <p className="font-serif text-gray-600">
            Schedule your session or inquire about a custom creation.
          </p>
        </div>

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

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#FFD700]/20 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-serif text-gray-600">Name</label>
              <Input required placeholder="Your name" className="border-[#DDA0DD]/30 focus:border-[#DDA0DD]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-serif text-gray-600">Email</label>
              <Input required type="email" placeholder="your@email.com" className="border-[#DDA0DD]/30 focus:border-[#DDA0DD]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-serif text-gray-600">Service</label>
              <Select>
                <SelectTrigger className="border-[#DDA0DD]/30">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reiki">Reiki Session</SelectItem>
                  <SelectItem value="custom">Custom Creation</SelectItem>
                  <SelectItem value="tarot">Soul Session (Tarot)</SelectItem>
                  <SelectItem value="other">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-serif text-gray-600">Preferred Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal border-[#DDA0DD]/30",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="bg-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-serif text-gray-600">Intention / Notes</label>
            <Textarea 
              placeholder="Share your intention or any questions..." 
              className="min-h-[120px] border-[#DDA0DD]/30 focus:border-[#DDA0DD]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#DDA0DD] hover:bg-[#BA55D3] text-white text-lg py-6 font-serif rounded-xl transition-all hover:scale-[1.02]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Light...
              </>
            ) : (
              "Begin Journey"
            )}
          </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
