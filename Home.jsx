
import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../lib/store.js'

export default function Home(){
  return (
    <div>
      <section className="relative">
        <img src="/assets/hero-case.svg" alt="Coque personnalisée" className="absolute right-4 top-6 w-40 opacity-10 md:opacity-100 md:w-72 md:right-10 md:top-10 pointer-events-none"/>
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Coques personnalisées <span className="text-brand-accent">en 2-3 jours</span>.</h1>
            <p className="mt-4 text-gray-600">Conçois ta coque en ligne (style Canva). Livraison locale par notre équipe ({config.regions}).</p>
            <div className="mt-6 flex gap-3">
              <Link to="/editor" className="px-5 py-3 rounded-xl bg-brand-accent text-white">Lancer l’éditeur</Link>
              <Link to="/shop" className="px-5 py-3 rounded-xl border">Voir la boutique</Link>
            </div>
            <div className="mt-4 text-xs text-gray-500">Pas besoin de la poste — on te livre directement.</div>
          </div>
          <div className="bg-gray-50 border rounded-2xl p-4">
            <img className="w-full rounded-xl" src="/assets/vending-demo.gif" alt="Démo distributrice"/>
            <p className="text-xs text-gray-500 mt-2">Démo visuelle — machines bientôt dans les malls de Montréal, Laval et Longueuil.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg">100% personnalisable</h3>
            <p className="text-gray-600 text-sm mt-2">Images, textes, couleurs, collages, modèles. Assistance “IA” (motifs générés).</p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg">Livraison locale rapide</h3>
            <p className="text-gray-600 text-sm mt-2">{config.deliveryDelay}. Suivi par SMS.</p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg">Qualité premium</h3>
            <p className="text-gray-600 text-sm mt-2">Meilleurs fournisseurs 🇩🇪 🇺🇸 pour des coques solides et belles.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t">
        <div className="max-w-6xl mx_auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Bientôt dans les malls & parcs d’attractions</h2>
            <p className="text-gray-600 mt-2 text-sm">Notre distributrice arrive bientôt à Montréal, Laval & Longueuil. Reste connecté.</p>
            <ul className="list-disc pl-5 mt-4 text-sm text-gray-700">
              <li>Montréal — centres commerciaux</li>
              <li>Laval — Carrefour, CF, etc.</li>
              <li>Longueuil — Terminus & malls</li>
            </ul>
            <Link to="/about" className="inline-block mt-4 underline">En savoir plus</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/vm-1.svg" alt="Distributrice" className="border rounded-xl"/>
            <img src="/assets/vm-2.svg" alt="Distributrice" className="border rounded-xl"/>
            <img src="/assets/vm-3.svg" alt="Distributrice" className="border rounded-xl col-span-2"/>
          </div>
        </div>
      </section>
    </div>
  )
}
