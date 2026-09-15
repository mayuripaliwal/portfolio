export default function Hero() {
  return (
    <section id="about" className="py-2 sm:py-2">
    <div className="relative bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            {/*eyebrow*/}
            <p className="text-3xl font-semibold text-amber-600 dark:text-amber-400">
                Hi, I'm Mayuri Paliwal
            </p>
            {/*heading*/}
            <h1 className="mt-24 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:mt-10 sm:text-2xl dark:text-white">
              Interested in Software Engineering, Backend Development & Problem Solving.
            </h1>
            {/* Supporting text */}
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                I enjoy solving problems and building things.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-amber-600 px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-amber-500  dark:bg-amber-400 dark:transition hover:bg-amber-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
