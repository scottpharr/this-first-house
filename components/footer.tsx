import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-navy py-8 lg:py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white font-bold text-xl text-center">
              <span className="text-light-purple text-xs lg:text-sm font-normal block leading-tight">
                This First
              </span>
              <span className="text-white text-xl lg:text-2xl font-bold leading-tight">House</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 lg:gap-8">
            <Link
              href="#episodes"
              className="text-white hover:text-light-purple transition-colors text-xs lg:text-sm"
            >
              Episodes
            </Link>
            <Link
              href="#live"
              className="text-white hover:text-light-purple transition-colors text-xs lg:text-sm"
            >
              Live
            </Link>
            <Link
              href="#guide"
              className="text-white hover:text-light-purple transition-colors text-xs lg:text-sm"
            >
              Homeowner&apos;s Guide
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-light-purple transition-colors text-xs lg:text-sm"
            >
              About
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-light-purple/60 text-xs text-center">
            &copy; {new Date().getFullYear()} This First House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
