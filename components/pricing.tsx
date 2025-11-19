"use client"

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Reiki Session",
    price: "$80",
    duration: "60 min",
    features: ["Chakra Balancing", "Energy Clearing", "Post-session feedback", "Virtual or In-person"],
    color: "border-[#DDA0DD]",
  },
  {
    name: "Custom Creation",
    price: "$50+",
    duration: "Varies",
    features: ["Personalized Intention", "Choice of Crystals", "Handmade with Love", "Gift Packaging"],
    color: "border-[#FFD700]",
    popular: true,
  },
  {
    name: "Soul Package",
    price: "$250",
    duration: "3 Sessions",
    features: ["3 Reiki Sessions", "1 Tarot Reading", "Custom Crystal Gift", "Priority Booking"],
    color: "border-[#8FBC8F]",
  },
]

export function Pricing() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#DDA0DD]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl text-[#8FBC8F] mb-4">Investment in Self</h2>
          <p className="font-serif text-gray-600">Choose the path that resonates with your journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#FFF5EE] rounded-2xl p-8 border-2 ${plan.color} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Loved
                </div>
              )}
              <h3 className="font-serif text-2xl text-gray-800 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-[#DDA0DD]">{plan.price}</span>
                <span className="text-gray-500 text-sm">/ {plan.duration}</span>
              </div>
              <ul className="mt-6 space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 font-serif text-sm">
                    <Check size={16} className="text-[#8FBC8F]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#DDA0DD] hover:bg-[#BA55D3] text-white font-serif" asChild>
                <Link href="#book">Book This</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
