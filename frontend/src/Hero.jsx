export default function Hero() {
  return (
    <section id="about" className="py-2 sm:py-2">
    <div className="relative bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/*eyebrow*/}
            <p className="text-3xl font-semibold text-amber-600 dark:text-amber-400">
                Hi, I'm Mayuri Paliwal
            </p>
            {/* Supporting text */}
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-300">
                I'm a 2026 IGDTUW grad who likes building backend-heavy applications, working with async APIs, background workers, Redis caching, and RAG pipelines on vector databases.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-amber-600 px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-amber-500  dark:bg-amber-400 dark:transition hover:bg-amber-300"
              >
                View Projects
              </a>
              <a
                href="https://github.com/mayuripaliwal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-amber-600 px-4 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400/10"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
