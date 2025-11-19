"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from 'lucide-react'
import { cn } from "@/lib/utils"

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
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-5xl md:text-6xl text-[#DDA0DD] mb-4">Ready to Bloom?</h2>
          <p className="font-serif text-gray-600">
            Schedule your session or inquire about a custom creation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#FFD700]/20 space-y-6">
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
    </section>
  )
}
