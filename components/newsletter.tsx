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
    <section className="py-12 lg:py-16 px-6 lg:px-20 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-dark-blue mb-2">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-600 text-sm">
              Get the latest updates, tips, and exclusive content delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 lg:w-72 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-sm"
              required
            />
            <button
              type="submit"
              className="bg-orange hover:bg-orange/90 text-white font-bold uppercase text-sm px-6 py-3 rounded-lg transition-colors tracking-wide whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
