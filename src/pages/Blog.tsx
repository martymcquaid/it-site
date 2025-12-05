import { useEffect } from 'react'

export default function Blog() {
  useEffect(() => { document.title = 'Vertex IT Solutions - Blog' }, [])
  const posts = [
    { slug:'why-monitoring-matters', title:'Why Remote Monitoring Matters for MSPs' },
    { slug:'the-modern-cyberstack', title:'Building a Modern Cybersecurity Stack' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold">Blog</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <div key={p.slug} className="p-5 bg-white dark:bg-slate-900 rounded-lg shadow">
            <div className="font-semibold">{p.title}</div>
            <p className="text-sm text-slate-600 mt-1">Read our insights on IT strategy and security.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
