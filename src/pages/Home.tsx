import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials'

import heroImg from '../assets/hero.jpg'

export default function Home() {
  return (
    <section className="min-h-screen">
      <div className="relative h-96 md:h-[520px] bg-gradient-to-br from-sky-800 to-indigo-900 text-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1520607162513-77705c0f9f24?auto=format&fit=crop&w=1400&q=80" alt="Tech planning" className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light" style={{opacity:0.5}} />
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center">
          <div className="flex-1 py-12 md:py-0 md:pr-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nexus IT Solutions — Premium IT Services for Northern Ireland</h1>
            <p className="text-lg text-slate-100/90">Security-driven, cloud-enabled, and future-ready IT managed services from a trusted local partner.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="px-5 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-slate-100">Get a Free Assessment</Link>
              <Link to="/pricing" className="px-5 py-3 bg-transparent border border-white text-white rounded-md font-semibold hover:bg-white/5">View Pricing</Link>
            </div>
          </div>
          <div className="flex-1 hidden md:flex justify-center items-center">
            <div className="w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80" alt="Premium IT work environment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white/90 dark:bg-slate-800 shadow">
          <div className="font-semibold mb-2">24/7 Remote Monitoring</div>
          <p className="text-sm text-slate-600 dark:text-slate-300">Proactive health checks and rapid remediation.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/90 dark:bg-slate-800 shadow">
          <div className="font-semibold mb-2">Cybersecurity</div>
          <p className="text-sm text-slate-600 dark:text-slate-300">Threat protection, detection, and compliance.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/90 dark:bg-slate-800 shadow">
          <div className="font-semibold mb-2">Cloud & Infra</div>
          <p className="text-sm text-slate-600 dark:text-slate-300">Cloud migrations and scalable architectures.</p>
        </div>
      </section>
      <Testimonials />
    </section>
  )
}
