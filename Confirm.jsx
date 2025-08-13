
import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'

export default function Confirm(){
  const [sp] = useSearchParams()
  const id = sp.get('order')
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h1 className="text-2xl font-bold">Merci!</h1>
      <p className="mt-2 text-gray-600">Commande <span className="font-mono bg-gray-100 px-2 py-1 rounded">{id}</span> reçue. Livraison en 2-3 jours. On te texte pour l’heure.</p>
      <Link to="/" className="inline-block mt-6 underline">Retour à l’accueil</Link>
    </div>
  )
}
