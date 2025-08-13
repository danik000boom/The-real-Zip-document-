
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart, useOrders, config } from '../lib/store.js'

export default function Checkout(){
  const items = useCart(s => s.items)
  const total = useCart(s => s.total)()
  const clear = useCart(s => s.clear)
  const addOrder = useOrders(s => s.addOrder)
  const nav = useNavigate()

  const [form, setForm] = useState({ name:'', phone:'', address:'', note:'', delivery:'standard' })

  const submit = (e) => {
    e.preventDefault()
    if (items.length === 0) return alert('Panier vide')
    const order = {
      id: 'LX-' + Math.random().toString(36).slice(2,8).toUpperCase(),
      ...form,
      total: Number((total + (form.delivery === 'express' ? 6.99 : 0)).toFixed(2)),
      items,
      createdAt: new Date().toISOString()
    }
    addOrder(order)
    clear()
    nav('/confirm?order='+order.id)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Checkout sécurisé</h1>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input required placeholder="Nom complet" className="border rounded-xl p-3" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
          <input required placeholder="Téléphone" className="border rounded-xl p-3" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/>
        </div>
        <input required placeholder={`Adresse (${config.regions})`} className="border rounded-xl p-3 w-full" value={form.address} onChange={e=>setForm({...form, address:e.target.value})}/>
        <textarea placeholder="Note de livraison (optionnel)" className="border rounded-xl p-3 w-full" value={form.note} onChange={e=>setForm({...form, note:e.target.value})}/>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="border rounded-xl p-3 flex items-center gap-3">
            <input type="radio" name="del" value="standard" checked={form.delivery==='standard'} onChange={()=>setForm({...form, delivery:'standard'})}/>
            <div><div>Standard 2-3 jours (0$)</div><div className="text-xs text-gray-500">Livré par notre équipe</div></div>
          </label>
          <label className="border rounded-xl p-3 flex items-center gap-3">
            <input type="radio" name="del" value="express" checked={form.delivery==='express'} onChange={()=>setForm({...form, delivery:'express'})}/>
            <div><div>Express 24h (+6.99$)</div><div className="text-xs text-gray-500">Selon disponibilité</div></div>
          </label>
        </div>
        <button className="px-5 py-3 rounded-xl bg-brand-accent text-white">Confirmer la commande</button>
        <p className="text-xs text-gray-500">Paiement en ligne Stripe bientôt. Pour l’instant: paiement à la livraison (débit/crédit/Interac).</p>
      </form>
    </div>
  )
}
