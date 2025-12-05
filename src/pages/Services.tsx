import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  useEffect(() => { document.title = 'Nexus IT Solutions - Services' }, [])
  const services = [
    { id: 'managed', title: 'Managed IT Support', blurb: 'Proactive monitoring, 24/7 remote support, and guaranteed response times.' },
    { id: 'cyber', title: 'Cybersecurity', blurb: 'Threat detection, incident response, and compliance across frameworks.' },
    { id: 'cloud', title: 'Cloud Solutions', blurb: 'Migration, optimization, and secure, scalable cloud architectures.' },
    { id: 'voice', title: 'VoIP & Telecom', blurb: 'Unified communications with reliable, enterprise-grade connectivity.' },
    { id: 'net', title: 'Network & Infra', blurb: 'Robust networks, monitoring, and high-availability infrastructure.' },
    { id: 'consult', title: 'IT Consultancy', blurb: 'Strategic IT planning aligned with business outcomes.' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold">Our Services</h1>
      <p className="text-slate-600 mt-2">Comprehensive IT services for Northern Ireland enterprises.</p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white dark:bg-slate-900 rounded-xl shadow p-5 hover:shadow-lg transition">
            <div className="font-semibold text-lg mb-1">{s.title}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{s.blurb}</p>
            <div className="mt-2">
              <img src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60`} alt="Service visual" className="w-full h-28 object-cover rounded" />
            </div>
            <div className="mt-3">
              <Link to={`/services/${s.id}`} className="text-indigo-600 hover:text-indigo-500 font-semibold">Learn more</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
