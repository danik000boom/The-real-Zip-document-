
import React from 'react'
import { useOrders } from '../lib/store.js'

export default function Admin(){
  const orders = useOrders(s => s.orders)
  const exportCSV = useOrders(s => s.exportCSV)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Admin — commandes</h1>
      <button onClick={exportCSV} className="mt-3 px-4 py-2 rounded-xl border">Exporter CSV</button>
      <div className="mt-6 grid gap-4">
        {orders.length === 0 && <p className="text-sm text-gray-600">Aucune commande pour l’instant.</p>}
        {orders.map(o => (
          <div key={o.id} className="border rounded-2xl p-4">
            <div className="flex flex-wrap justify-between gap-2">
              <div className="font-semibold">{o.id}</div>
              <div className="text-sm text-gray-500">{new Date(o.createdAt).toLocaleString()}</div>
            </div>
            <div className="mt-2 text-sm">{o.name} — {o.phone}</div>
            <div className="text-sm text-gray-600">{o.address}</div>
            <div className="mt-2 text-sm">Total: ${o.total}</div>
            <div className="mt-2 grid md:grid-cols-4 gap-2">
              {o.items.map((it,idx)=>(
                <div key={idx} className="border rounded-xl p-2 text-xs">
                  <img src={it.preview} className="w-full h-28 object-contain"/>
                  <div className="mt-1">{it.model}</div>
                  <div>${it.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
