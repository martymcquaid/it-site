import { useEffect } from 'react'

export default function About() {
  useEffect(() => { document.title = 'Nexus IT Solutions - About' }, [])
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">About Nexus IT Solutions</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Nexus IT Solutions is a premium IT services partner helping enterprises navigate complex technology landscapes with confidence in Northern Ireland.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold">Our mission</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">To enable businesses to innovate securely, efficiently, and with minimal disruption.</p>
        </div>
        <div>
          <h3 className="font-semibold">Our approach</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Strategy, design, and engineering excellence delivered through a transparent, outcome-driven engagement model.</p>
        </div>
      </div>
    </section>
  )
}
