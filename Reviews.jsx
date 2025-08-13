
import React from 'react'

const data = [
  {name:'Sasha', text:'Qualité incroyable, impression nette. Livré super vite!', rating:5},
  {name:'Marc', text:'Éditeur facile, j’ai ajouté la photo de mon chien. Top!', rating:5},
  {name:'Chloé', text:'Bonne coque, la prise en main est solide.', rating:4},
]

function Stars({n}){
  return <div className="text-yellow-500">{'★'.repeat(n)}<span className="text-gray-300">{'★'.repeat(5-n)}</span></div>
}

export default function Reviews(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Avis clients</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {data.map((r,i)=>(
          <div key={i} className="border rounded-2xl p-4">
            <Stars n={r.rating}/>
            <div className="mt-2 font-semibold">{r.name}</div>
            <p className="text-sm text-gray-600 mt-1">{r.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 border rounded-2xl p-4 bg-gray-50">
        <h2 className="font-semibold">Notre prototype (ancienne méthode)</h2>
        <p className="text-sm text-gray-600 mt-1">Avant: découpe/plaquage manuel. Maintenant: impression pro et 100% personnalisable.</p>
        <img src="/assets/prototype.svg" alt="Prototype bricolé" className="mt-3 w-full border rounded-lg"/>
      </div>
    </div>
  )
}
