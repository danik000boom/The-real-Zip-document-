
import React, { useEffect, useRef, useState } from 'react'
import { fabric } from 'fabric'
import { useCart } from '../lib/store.js'

export default function Editor(){
  const canvasRef = useRef(null)
  const fabricRef = useRef(null)
  const [model, setModel] = useState('iPhone 15')
  const [price, setPrice] = useState(34.99)
  const addItem = useCart(s => s.addItem)

  useEffect(() => {
    const canvas = new fabric.Canvas('case-canvas', { backgroundColor: '#fff', preserveObjectStacking: true })
    fabricRef.current = canvas
    const outline = new fabric.Rect({ left: 20, top: 20, width: 280, height: 560, rx: 40, ry: 40, stroke: '#111827', fill: 'white', strokeWidth: 2, selectable: false })
    canvas.add(outline)
    return () => canvas.dispose()
  }, [])

  const addText = () => {
    const t = new fabric.IText('Ton texte', { left: 60, top: 80, fill: '#111827', fontFamily: 'Arial', fontSize: 28 })
    fabricRef.current.add(t).setActiveObject(t)
  }

  const addImage = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      fabric.Image.fromURL(reader.result, img => {
        img.set({ left: 80, top: 140, scaleX: 0.4, scaleY: 0.4 })
        fabricRef.current.add(img).setActiveObject(img)
      }, { crossOrigin: 'anonymous' })
    }
    reader.readAsDataURL(file)
  }

  const randomPattern = () => {
    const c = fabricRef.current
    for (let i=0;i<12;i++){
      const isCircle = Math.random() > 0.5
      const color = `hsl(${Math.floor(Math.random()*360)}, 70%, 60%)`
      if (isCircle){
        const circ = new fabric.Circle({ radius: 16+Math.random()*20, left: 40+Math.random()*220, top: 60+Math.random()*480, fill: color, opacity: 0.8 })
        c.add(circ)
      } else {
        const rect = new fabric.Rect({ width: 24+Math.random()*40, height: 24+Math.random()*40, left: 40+Math.random()*220, top: 60+Math.random()*480, fill: color, angle: Math.random()*360, opacity: 0.8 })
        c.add(rect)
      }
    }
  }

  const clearCanvas = () => {
    const c = fabricRef.current
    const keep = c.getObjects().filter(o => o.selectable === false)
    c.clear()
    keep.forEach(o => c.add(o))
  }

  const addToCart = () => {
    const c = fabricRef.current
    c.discardActiveObject()
    const dataURL = c.toDataURL({ format: 'png', quality: 1 })
    const item = {
      id: crypto.randomUUID(),
      model,
      preview: dataURL,
      price,
      qty: 1
    }
    addItem(item)
    alert('Ajouté au panier!')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Éditeur de coque (style Canva)</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 border rounded-2xl p-4">
          <canvas id="case-canvas" ref={canvasRef} width="320" height="600" className="border rounded-xl"></canvas>
        </div>
        <div className="border rounded-2xl p-4 space-y-4">
          <div>
            <label className="text-sm font-semibold">Modèle</label>
            <select value={model} onChange={e=>setModel(e.target.value)} className="mt-1 w-full border rounded-xl p-2">
              <option>iPhone 15</option>
              <option>iPhone 15 Pro</option>
              <option>Samsung S24</option>
              <option>Google Pixel 8</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold">Image</label>
            <input type="file" accept="image/*" onChange={addImage} className="mt-1 w-full"/>
          </div>
          <div className="flex gap-2">
            <button onClick={addText} className="px-3 py-2 rounded-xl border">Ajouter texte</button>
            <button onClick={randomPattern} className="px-3 py-2 rounded-xl border">Motif IA</button>
          </div>
          <div className="flex gap-2">
            <button onClick={clearCanvas} className="px-3 py-2 rounded-xl border">Effacer</button>
            <button onClick={addToCart} className="px-3 py-2 rounded-xl bg-brand-accent text-white">Ajouter au panier</button>
          </div>
          <p className="text-xs text-gray-500">Glisse, redimensionne, fais pivoter. L’aperçu est exporté au panier.</p>
        </div>
      </div>
    </div>
  )
}
