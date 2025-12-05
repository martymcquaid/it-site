import { useEffect } from 'react'

export default function Industries() {
  useEffect(() => { document.title = 'Nexus IT Solutions - Industries' }, [])
  const industries = ['Retail','Healthcare','Corporate','SMBs','Education']
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold">Industries We Serve</h1>
      <p className="text-slate-600 mt-2">Tailored IT services designed for sector-specific needs in Northern Ireland.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((i) => (
          <div key={i} className="p-5 rounded-lg bg-white dark:bg-slate-900 shadow-sm">
            <div className="font-semibold mb-2">{i}</div>
            <div className="text-sm text-slate-600">Industry-specific IT solutions and support.</div>
          </div>
        ))}
      </div>
    </section>
  )
}
