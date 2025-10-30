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
        {/* Logo STRULLO */}
        <Link href="/" className="flex items-center space-x-3">
          {/* Logo immagine - stile disegnato a mano */}
          <div className="relative h-10 w-32 md:w-40">
            <img 
              src="/logo-strullo.png" 
              alt="STRULLO" 
              className="h-full w-full object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              onError={(e) => {
<<<<<<< HEAD
                // Fallback: usa logo SVG se PNG non è disponibile
                e.currentTarget.src = '/logo-placeholder.svg';
                e.currentTarget.className = 'h-full w-full object-contain opacity-90 hover:opacity-100 transition-opacity';
=======
                // Fallback se l'immagine non è ancora stata caricata
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
>>>>>>> 6265e559eb01950f09674cb85be871a703118f2e
              }}
            />
            {/* Fallback text logo con stile disegnato */}
            <span 
              className="hidden font-serif text-3xl font-bold text-tarot-gold tracking-wide"
              style={{ fontWeight: 900, letterSpacing: '0.05em' }}
            >
              Strullo
            </span>
          </div>
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

