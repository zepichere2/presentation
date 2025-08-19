import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero */}
      <section className="px-6 sm:px-12 md:px-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              One Portal. All City Services.
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              No more confusion. Get everything you need in one place.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#demo" className="px-5 py-3 rounded-xl bg-[#1E3A8A] text-white">
                Explore Dashboard
              </a>
              <a href="#request" className="px-5 py-3 rounded-xl border border-black/10 dark:border-white/20">
                Request a Service
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6 bg-white dark:bg-white/5">
            <div className="h-56 rounded-xl bg-gradient-to-br from-[#1E3A8A]/10 to-[#14B8A6]/20 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
              Cityscape illustration (placeholder)
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 sm:px-12 md:px-20 py-14 bg-gray-50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">The Problem</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
            <div className="rounded-xl border border-black/10 dark:border-white/15 p-6">
              <div className="h-40 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                Maze / scattered apps (placeholder)
              </div>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li>Services are scattered across multiple offices/websites.</li>
              <li>Confusing navigation frustrates residents.</li>
              <li>Wastes time — standing in lines, calling helplines.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 sm:px-12 md:px-20 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our Fix: Unified City Services Dashboard
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "One Portal, Many Services",
                desc: "Bills, permits, health, waste, transport.",
              },
              { title: "Smart Search & Chatbot", desc: "Ask, find instantly." },
              {
                title: "Personalized Dashboard",
                desc: "See your services in one view.",
              },
              { title: "Multichannel Access", desc: "Mobile, web, kiosks." },
              {
                title: "Real-time Notifications",
                desc: "Updates, deadlines, alerts.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-black/10 dark:border-white/15 p-5 bg-white dark:bg-white/5"
              >
                <div className="text-xl font-medium">{c.title}</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="px-6 sm:px-12 md:px-20 py-14 bg-gray-50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="rounded-xl border border-black/10 dark:border-white/15 p-5">
              <div className="text-sm text-gray-500">Bills due</div>
              <div className="mt-2 text-2xl font-semibold">$86.40 by 28 Aug</div>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/15 p-5">
              <div className="text-sm text-gray-500">Waste pickup</div>
              <div className="mt-2">Next: Tue & Fri, 7–9 AM</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-black/10 dark:border-white/15 p-5">
              <div className="text-sm text-gray-500">Transport</div>
              <div className="mt-2">Bus 12: 3 min • Metro Red: 6 min</div>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/15 p-5">
              <div className="text-sm text-gray-500">Health appointment</div>
              <div className="mt-2">Clinic visit: Thu 3:00 PM</div>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/15 p-5">
              <div className="text-sm text-gray-500">Permits</div>
              <div className="mt-2">Business permit: In review (2/4)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 sm:px-12 md:px-20 py-14">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          {[
            { icon: "🕒", title: "Saves Time", desc: "All in one place." },
            { icon: "🌍", title: "Inclusive Access", desc: "Mobile, web, kiosks." },
            { icon: "🙌", title: "Builds Trust", desc: "Transparent and reliable." },
          ].map((i) => (
            <div key={i.title} className="rounded-xl border border-black/10 dark:border-white/15 p-6">
              <div className="text-3xl">{i.icon}</div>
              <div className="mt-2 text-xl font-medium">{i.title}</div>
              <div className="text-gray-600 dark:text-gray-300">{i.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 sm:px-12 md:px-20 py-14 bg-gray-50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl md:text-3xl font-semibold">Your city. Simplified.</div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#demo" className="px-5 py-3 rounded-xl bg-[#1E3A8A] text-white">
              Try Demo
            </a>
            <a href="#support" className="px-5 py-3 rounded-xl border border-black/10 dark:border-white/20">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
}
