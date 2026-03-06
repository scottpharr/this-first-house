"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 lg:px-20 lg:py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-white font-bold text-xl lg:text-2xl">
            <span className="text-light-purple text-sm lg:text-base font-normal block leading-tight">
              This First
            </span>
            <span className="text-white text-2xl lg:text-3xl font-bold leading-tight">House</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#episodes"
            className="text-white hover:text-light-purple transition-colors font-medium"
          >
            Episodes
          </Link>
          <Link
            href="#live"
            className="text-white hover:text-light-purple transition-colors font-medium"
          >
            Live
          </Link>
          <Link
            href="#guide"
            className="text-white hover:text-light-purple transition-colors font-medium"
          >
            Homeowner&apos;s Guide
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-light-purple transition-colors font-medium"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-sm py-4 px-6">
          <div className="flex flex-col gap-4">
            <Link
              href="#episodes"
              className="text-white hover:text-light-purple transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Episodes
            </Link>
            <Link
              href="#live"
              className="text-white hover:text-light-purple transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Live
            </Link>
            <Link
              href="#guide"
              className="text-white hover:text-light-purple transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Homeowner&apos;s Guide
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-light-purple transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
