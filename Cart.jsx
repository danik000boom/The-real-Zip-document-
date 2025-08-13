
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../lib/store.js'

export default function Cart(){
  const items = useCart(s => s.items)
  const remove = useCart(s => s.removeItem)
  const total = useCart(s => s.total)()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Panier</h1>
      {items.length === 0 ? (
        <p className="text-sm text-gray-600 mt-2">Ton panier est vide. <Link to="/shop" className="underline">Aller à la boutique</Link></p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 space-y-4">
            {items.map(i => (
              <div key={i.id} className="flex gap-4 items-center border rounded-2xl p-3">
                <img src={i.preview} className="w-20 h-28 object-contain border rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{i.model}</div>
                  <div className="text-sm text-gray-600">${i.price.toFixed(2)}</div>
                </div>
                <button onClick={()=>remove(i.id)} className="text-sm underline">Retirer</button>
              </div>
            ))}
          </div>
          <div className="border rounded-2xl p-4 h-fit">
            <div className="flex justify-between"><span>Sous-total</span><span>${total.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm text-gray-600"><span>Livraison</span><span>Calculée au checkout</span></div>
            <Link to="/checkout" className="mt-4 block w-full text-center px-4 py-2 rounded-xl bg-brand-accent text-white">Passer au paiement</Link>
          </div>
        </div>
      )}
    </div>
  )
}
