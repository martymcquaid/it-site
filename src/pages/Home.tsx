export default function Home() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-1 bg-gradient-to-br from-sky-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Premium IT Services for Modern Enterprises</h1>
            <p className="text-lg text-sky-100 mb-6">Security-driven, cloud-enabled, and future-ready IT managed services from a trusted partner.</p>
            <div className="flex gap-3">
              <a href="/contact" className="px-5 py-3 bg-white text-indigo-600 rounded-md font-semibold">Get a Free Assessment</a>
              <a href="/pricing" className="px-5 py-3 bg-transparent border border-white text-white rounded-md font-semibold">View Pricing</a>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 pl-6">
            <div className="h-72 bg-white/20 rounded-xl shadow-xl" aria-label="Hero graphic" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg shadow bg-gray-50 dark:bg-slate-800">
            <div className="font-semibold">24/7 Remote Monitoring</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Proactive health checks and rapid remediation.</p>
          </div>
          <div className="p-4 rounded-lg shadow bg-gray-50 dark:bg-slate-800">
            <div className="font-semibold">Cybersecurity</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Threat protection, detection, and compliance.</p>
          </div>
          <div className="p-4 rounded-lg shadow bg-gray-50 dark:bg-slate-800">
            <div className="font-semibold">Cloud & Infra</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Cloud migrations and scalable architectures.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
