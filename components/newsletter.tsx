"use client"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-8 lg:py-16 px-6 lg:px-20 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6">
          <div>
            <h2 className="text-base lg:text-2xl font-bold text-dark-blue mb-1 lg:mb-2">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-600 text-xs lg:text-sm hidden lg:block">
              Get the latest updates, tips, and exclusive content delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full lg:w-auto gap-2 lg:gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 lg:w-72 px-3 lg:px-4 py-2 lg:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-xs lg:text-sm"
              required
            />
            <button
              type="submit"
              className="bg-orange hover:bg-orange/90 text-white font-bold uppercase text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-3 rounded-lg transition-colors tracking-wide whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
