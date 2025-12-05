import { useEffect } from 'react'

export default function Pricing() {
  useEffect(() => { document.title = 'Nexus IT Solutions - Pricing' }, [])
  const tiers = [
    { id:'basic', name:'Basic', price:0, features:['Email support','Core security','1 site','Community access'] },
    { id:'standard', name:'Standard', price:49, features:['Phone support','Advanced security','5 sites','Cloud backup'] },
    { id:'premium', name:'Premium', price:129, features:['Priority support','Full security suite','Unlimited sites','SLA 99.9%'] },
    { id:'enterprise', name:'Enterprise', price:299, features:['Dedicated architect','Custom SLAs','On-site visits','24/7 coverage'] },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold">Pricing Plans</h1>
      <p className="text-slate-600 mt-2">Transparent pricing for every business size.</p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map(t => (
          <div key={t.id} className="border rounded-lg p-5 bg-white dark:bg-slate-900 shadow-sm">
            <div className="font-semibold text-lg mb-1">{t.name}</div>
            <div className="text-4xl font-extrabold">${t.price}<span className="text-sm text-slate-600">/mo</span></div>
            <ul className="mt-3 text-sm text-slate-600">
              {t.features.map((f,i)=> <li key={i}>• {f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
