import React from 'react'

type Testimonial = {
  name: string
  title?: string
  company?: string
  quote: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jamie O\'Neill',
    title: ' CIO',
    company: 'Northern Health IT',
    quote: 'Nexus transformed our IT operations with minimal disruption and maximum uptime.'
  },
  {
    name: 'Kate McAllister',
    title: 'CTO',
    company: 'Lagan Technologies',
    quote: 'A premium partner that truly understands security, cloud, and modern networking.'
  },
  {
    name: 'Colin Roche',
    title: 'IT Director',
    company: 'Aurora Retail',
    quote: 'Reliable, seasoned experts who deliver outcomes fast.'
  }
]

export default function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-extrabold mb-4 text-slate-800 dark:text-slate-100">What our clients say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <blockquote key={idx} className="p-6 rounded-lg bg-white dark:bg-slate-800 shadow">
              <p className="text-slate-700 dark:text-slate-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-600 dark:text-slate-300">{t.name}{t.title ? `, ${t.title}` : ''}{t.company ? ` • ${t.company}` : ''}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
