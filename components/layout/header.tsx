"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/soci", label: "Diventa socio" },
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News" },
    { href: "/shop", label: "Shop" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-tarot-gold/20 bg-tarot-dark/95 backdrop-blur supports-[backdrop-filter]:bg-tarot-dark/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo - SOSTITUIRE CON VOSTRO LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-tarot-gold/20 border-2 border-tarot-gold rounded-sm flex items-center justify-center">
            {/* TODO: Inserire logo qui */}
            <span className="text-tarot-gold font-serif text-xl font-bold">S</span>
          </div>
          <span className="hidden md:block font-serif text-2xl font-bold text-tarot-gold">
            STRULLO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-tarot-cream hover:text-tarot-gold transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-tarot-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-tarot-gold/20 bg-tarot-dark/98 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-tarot-cream hover:text-tarot-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

