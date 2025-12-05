import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type NavItem = { to: string; label: string }

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('vt_theme')
    const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('vt_theme', next ? 'dark' : 'light')
  }
  return (
    <button aria-label="Toggle dark mode" onClick={toggle} className="px-3 py-2 bg-slate-800/60 text-white rounded-md hover:bg-slate-700 transition">
      {dark ? 'Light' : 'Dark'} Mode
    </button>
  )
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleMobile = () => setMobileOpen(v => !v)
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm dark:bg-slate-900/90">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-extrabold tracking-tight text-indigo-600">Nexus IT Solutions</span>
          <span className="text-sm text-slate-500 hidden md:inline-block">• Northern Ireland</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {NAV_ITEMS.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-slate-700 hover:text-indigo-600 dark:text-slate-100 dark:hover:text-indigo-400">{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <button className="md:hidden p-2 rounded-md" onClick={toggleMobile} aria-label="Open menu">☰</button>
          <ThemeToggle />
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-sm">
          <div className="px-4 py-2 flex flex-col space-y-1">
            {NAV_ITEMS.map(n => (
              <Link key={n.to} to={n.to} className="p-2 text-sm text-slate-700 hover:text-indigo-600">{n.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-lg mb-2">Nexus IT Solutions</div>
          <p className="text-sm text-slate-300">Premium IT services for modern enterprises in Northern Ireland. Trusted, secure, scalable.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Services</div>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Managed IT</li>
            <li>Cybersecurity</li>
            <li>Cloud Solutions</li>
            <li>VoIP & Telecommunication</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Industries</div>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Corporate</li>
            <li>SMBs</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div className="text-sm text-slate-300">hello@nexus-ni.example</div>
          <div className="text-sm text-slate-300 mt-1">+44 28 1234 5678</div>
        </div>
      </div>
    </footer>
  )
}

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
      <LiveChatWidget />
    </div>
  )
}

function CookieBanner() {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const seen = localStorage.getItem('vt_cookie')
    setVisible(!seen)
  }, [])
  if (!visible) return null
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-md shadow-md max-w-sm" role="region" aria-label="Cookie policy">
      <div className="text-sm mb-2">We use cookies to improve your experience. By continuing, you agree to our cookie policy.</div>
      <div className="flex justify-end space-x-2">
        <button className="px-3 py-2 bg-slate-600 rounded" onClick={() => setVisible(false)}>Decline</button>
        <button className="px-3 py-2 bg-indigo-600 rounded" onClick={() => { localStorage.setItem('vt_cookie','1'); setVisible(false); }}>Accept</button>
      </div>
    </div>
  )
}

function LiveChatWidget() {
  return (
    <div className="fixed bottom-4 left-4 bg-emerald-500 text-white px-4 py-2 rounded-full shadow-lg" aria-label="Live chat placeholder" style={{cursor:'pointer'}}>💬 Chat</div>
  )
}

export default Layout
export { Navbar, Footer }
