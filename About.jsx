
import React from 'react'

export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">À propos</h1>
      <p className="mt-2 text-gray-600">Nous produisons des coques personnalisées de haute qualité. Promesse: rapide, local, premium.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="border rounded-2xl p-4">
          <h3 className="font-semibold">Nos fournisseurs</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>Partenaires en Allemagne — plastiques & encres premium</li>
            <li>Partenaires aux États-Unis — finition & contrôles qualité</li>
          </ul>
        </div>
        <div className="border rounded-2xl p-4">
          <h3 className="font-semibold">Coming soon — Distributrices</h3>
          <p className="text-sm text-gray-600 mt-1">Montréal, Laval, Longueuil & parcs d’attractions. Restez à l’affût.</p>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <img src="/assets/vm-1.svg" className="border rounded-lg"/>
            <img src="/assets/vm-2.svg" className="border rounded-lg"/>
            <img src="/assets/vm-3.svg" className="border rounded-lg"/>
          </div>
        </div>
      </div>
    </div>
  )
}
