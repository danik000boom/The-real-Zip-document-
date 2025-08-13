
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Sparkles } from 'lucide-react'
import { useCart, config } from '../lib/store.js'

const nav = [
  {to: '/shop', label: 'Boutique'},
  {to: '/editor', label: 'Éditeur'},
  {to: '/reviews', label: 'Avis'},
  {to: '/about', label: 'À propos'},
]

export default function Navbar(){
  const items = useCart(s => s.items)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Sparkles className="w-6 h-6 text-brand-accent" />
          {config.brandName}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive}) =>
              'text-sm ' + (isActive ? 'text-brand-accent font-semibold' : 'text-gray-600 hover:text-black')
            }>{n.label}</NavLink>
          ))}
        </nav>
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs w-5 h-5 rounded-full grid place-items-center">
              {items.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
