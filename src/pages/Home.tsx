<file>
00001| // Hero + overview for Vertex IT Solutions
00002| export default function Home() {
00003|   return (
00004|     <section className="min-h-screen flex flex-col">
00005|       <div className="flex-1 bg-gradient-to-br from-sky-600 to-indigo-600 text-white py-20">
00006|         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
00007|           <div className="w-full md:w-1/2">
00008|             <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Premium IT Services for Modern Enterprises</h1>
00009|             <p className="text-lg text-sky-100 mb-6">Security-driven, cloud-enabled, and future-ready IT managed services from a trusted partner.</p>
00010|             <div className="flex gap-3">
00011|               <a href="/contact" className="px-5 py-3 bg-white text-indigo-600 rounded-md font-semibold">Get a Free Assessment</a>
00012|               <a href="/pricing" className="px-5 py-3 bg-transparent border border-white text-white rounded-md font-semibold">View Pricing</a>
00013|             </div>
00014|           </div>
00015|           <div className="hidden md:block md:w-1/2 pl-6">
00016|             <div className="h-72 bg-white/20 rounded-xl shadow-xl" aria-label="Hero graphic" />
00017|           </div>
00018|         </div>
00019|       </div>
00020|       <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-8">
00021|         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
00022|           <div className="p-4 rounded-lg shadow bg-gray-50 dark:bg-slate-800">
00023|             <div className="font-semibold">24/7 Remote Monitoring</div>
00024|             <p className="text-sm text-slate-600 dark:text-slate-300">Proactive health checks and rapid remediation.</p>
00025|           </div>
00026|           <div className="p-4 rounded-lg shadow bg-gray-50 dark:bg-slate-800">
00027|             <div className="font-semibold">Advanced Cybersecurity</div>
00028|             <p className="text-sm text-slate-600 dark:text-slate-300">Threat protection, detection, and compliance.</p>
00029|           </div>
00030|           <div className="p-4 rounded-lg shadow bg-gray-50 dark:bg-slate-800">
00031|             <div className="font-semibold">Cloud & Infrastructure</div>
00032|             <p className="text-sm text-slate-600 dark:text-slate-300">Cloud migrations and scalable architectures.</p>
00033|           </div>
00034|         </div>
00035|       </div>
00036|     </section>
00037|   )
00038| }
00039| 
00040|</file>