export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-4xl font-semibold tracking-wide text-amber-600 sm:text-5xl dark:text-amber-400">
            Education
          </p>

          <h2 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Academic Background
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-800/50 sm:p-8">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Indira Gandhi Delhi Technical University for Women
                </h3>
            </div>
            <div>
                <p className="text-base text-gray-500 dark:text-gray-400">
                    Nov 2022 – May 2026
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    Bachelor of Technology in Electronics and Communication Engineering
                </p>         
            </div>
            <div>
                <p className="font-semibold text-amber-600 dark:text-amber-400">
                    CGPA: 7.8 / 10
                </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}