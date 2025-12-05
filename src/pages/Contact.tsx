import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => { document.title = 'Vertex IT Solutions - Contact' }, [])
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 grid gap-6">
      <h1 className="text-3xl font-extrabold">Get in touch</h1>
      <form className="grid md:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
        <input className="p-3 rounded bg-white dark:bg-slate-900 border" placeholder="Your name" />
        <input className="p-3 rounded bg-white dark:bg-slate-900 border" placeholder="Email" />
        <textarea className="p-3 rounded bg-white dark:bg-slate-900 border md:col-span-2" placeholder="Your message" rows={6}></textarea>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded" type="submit">Send Message</button>
      </form>
      <div className="text-sm text-slate-600">Or call us at +1 (555) 012-3456</div>
    </section>
  )
}
