
import React from 'react'
import { useCart } from '../lib/store.js'

const products = [
  { id: 'ip15-soft', name: 'iPhone 15 - Souple', price: 24.99, img: '/assets/case-soft.svg' },
  { id: 'ip15p-hard', name: 'iPhone 15 Pro - Rigide', price: 29.99, img: '/assets/case-hard.svg' },
  { id: 's24-magsafe', name: 'Samsung S24 - MagSafe', price: 34.99, img: '/assets/case-magsafe.svg' },
  { id: 'px8-soft', name: 'Pixel 8 - Souple', price: 24.99, img: '/assets/case-soft.svg' },
]

export default function Shop(){
  const add = useCart(s => s.addItem)
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Boutique</h1>
      <p className="text-sm text-gray-600 mt-1">Choisis un modèle blanc et personnalise-le dans l’éditeur, ou commande simple.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {products.map(p => (
          <div key={p.id} className="border rounded-2xl p-4">
            <img src={p.img} alt={p.name} className="w-full h-52 object-contain"/>
            <div className="mt-2 font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600">${p.price.toFixed(2)}</div>
            <button
              onClick={()=>add({id: crypto.randomUUID(), model: p.name, price: p.price, qty:1, preview: p.img})}
              className="mt-3 px-4 py-2 rounded-xl bg-brand-accent text-white w-full"
            >Ajouter</button>
          </div>
        ))}
      </div>
    </div>
  )
}
