
import { create } from 'zustand'

export const useCart = create((set, get) => ({
  items: [],
  addItem: (item) => set({ items: [...get().items, item] }),
  removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((s, i) => s + i.price * (i.qty || 1), 0)
}))

export const useOrders = create((set) => ({
  orders: JSON.parse(localStorage.getItem('orders') || '[]'),
  addOrder: (order) => {
    const updated = [...JSON.parse(localStorage.getItem('orders') || '[]'), order]
    localStorage.setItem('orders', JSON.stringify(updated))
    set({ orders: updated })
  },
  exportCSV: () => {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    const headers = Object.keys(orders[0] || {id:'', name:'', phone:'', address:'', total:'', items:''})
    const rows = [headers.join(',')]
    for (const o of orders) {
      const row = headers.map(h => {
        const val = o[h]
        if (typeof val === 'object') return JSON.stringify(val).replace(/,/g,';')
        return String(val).replace(/,/g,';')
      }).join(',')
      rows.push(row)
    }
    const blob = new Blob([rows.join('\n')], {type: 'text/csv'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'orders.csv'
    a.click()
    URL.revokeObjectURL(url)
  }
}))

export const config = {
  brandName: "LuxCases",
  email: "hello@luxcases.co",
  phone: "+1 (514) 555-0199",
  regions: "Montréal, Laval, Longueuil & Rive-Sud",
  deliveryDelay: "2-3 jours (livraison par notre équipe)"
}
