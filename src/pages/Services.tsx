import React, { useEffect } from 'react'

export default function Services() {
  useEffect(() => { document.title = 'Vertex IT Solutions - Services' }, [])
  const services = [
    { id: 'managed', title: 'Managed IT Support', blurb: 'Proactive monitoring, remote support, and 24/7 response.' },
    { id: 'cyber', title: 'Cybersecurity', blurb: 'Threat detection, incident response, and compliance.' },
    { id: 'cloud', title: 'Cloud Solutions', blurb: 'Migration, optimization, and secure cloud architectures.' },
    { id: 'voice', title: 'VoIP & Telecom', blurb: 'Unified communications and reliable connectivity.' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold">Our Services</h1>
      <p className="text-slate-600 mt-2">A holistic suite of IT services tailored for modern enterprises.</p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white dark:bg-slate-900 rounded-lg shadow p-5 hover:shadow-lg transition">
            <div className="font-semibold mb-2">{s.title}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{s.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
