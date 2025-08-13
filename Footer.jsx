
import React from 'react'
import { config } from '../lib/store.js'

export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: <a className="underline" href={`mailto:${config.email}`}>{config.email}</a></p>
          <p>Tél: <a className="underline" href={`tel:${config.phone}`}>{config.phone}</a></p>
          <p>Zones: {config.regions}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Légal & Confiance</h3>
          <ul className="space-y-1">
            <li>Retours sous 14 jours</li>
            <li>Paiement sécurisé (Stripe bientôt)</li>
            <li>Garantie ajustement coque</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Réseaux</h3>
          <ul className="space-y-1">
            <li><a className="underline" href="#" target="_blank">Instagram</a></li>
            <li><a className="underline" href="#" target="_blank">TikTok</a></li>
            <li><a className="underline" href="#" target="_blank">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">À savoir</h3>
          <ul className="space-y-1">
            <li>Livraison locale {config.deliveryDelay}</li>
            <li>Sans poste; livré par notre équipe</li>
            <li>Éditeur en ligne type Canva</li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-center text-gray-500 pb-6">© {new Date().getFullYear()} {config.brandName}. Tous droits réservés.</div>
    </footer>
  )
}
