import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()
  useEffect(() => { document.title = `Vertex IT Solutions - ${slug}` }, [slug])
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold">Blog Article</h1>
      <p className="text-sm text-slate-600 mt-2">Slug: {slug}</p>
      <p className="mt-4 text-slate-700">This is a placeholder article. Replace with real content to meet the final design spec.</p>
    </section>
  )
}
