import { useEffect } from 'react'

export default function Careers() {
  useEffect(() => { document.title = 'Vertex IT Solutions - Careers' }, [])
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold">Careers</h1>
      <p className="mt-2 text-slate-600">Join our team of curious thinkers and engineers shaping the future of IT services.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-slate-900 rounded shadow-sm">
          <div className="font-semibold">Senior Systems Engineer</div>
          <p className="text-sm text-slate-600">Location: Remote / USA | Experience: 5+ years</p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-900 rounded shadow-sm"> 
          <div className="font-semibold">Security Architect</div>
          <p className="text-sm text-slate-600">Location: Remote / EU | Experience: 4+ years</p>
        </div>
      </div>
    </section>
  )
}
