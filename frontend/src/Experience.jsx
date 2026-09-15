export default function Experience() {
    
  return (        
    <section id="experience" className="py-12 sm:py-12">
        <div className="mt-12">
      
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-6xl font-semibold tracking-wide text-amber-600 dark:text-amber-400">
              Experience
          </p>

          <h2 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Where I've worked
          </h2>
        </div>
        
        <div className="mx-auto mt-12 w-full max-w-7xl">
            
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-800/50 sm:p-10">
            
            {/* Header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Alpha AI
                </h3>

                <p className="mt-1 text-xl text-gray-600 dark:text-gray-300">
                  Flutter Developer Intern
                </p>
              </div>

              <p className="text-base text-gray-500 dark:text-gray-400">
                Jun 2025 — Aug 2025
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 text-xl leading-7 text-gray-600 dark:text-gray-300">
              Built Android and desktop applications integrating speech-to-text
              and LLM frameworks, while working across frontend, backend, APIs,
              and media-processing pipelines.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-4 text-xl leading-7 text-gray-600 dark:text-gray-300">
              <li className="flex gap-x-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-400" />
                <span>
                  Built Android and desktop applications with Flutter, adding features powered by open-source speech-to-text and LLM frameworks.
                </span>
              </li>

              



              <li className="flex gap-x-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-400" />
                <span>
                  Worked on backend and media-processing pipelines using FFmpeg, multithreading, and adaptive model selection, improving inference speed by up to 2×.
                </span>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-400" />
                <span>
                  Integrated LLM, speech-to-text, and Google Calendar APIs into application workflows, using caching and lifecycle-aware synchronization to reduce redundant Calendar API calls by 67%.
                </span>
              </li>
            </ul>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Flutter",
                "Python",
                "FFmpeg",
                "REST APIs",
                "Firebase",
                "LLMs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-3 py-1.5 text-sm text-gray-600 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
          </div>
        
        </div>
    </section>
  )
}

