import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  LinkIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    title: 'trimly',
    description:'A full-stack URL shortening service with authentication, Redis caching, asynchronous analytics, and rate limiting.',
    technologies:'React, FastAPI, PostgreSQL, Redis, ARQ',
    href: 'https://gettrimly.vercel.app',
    icon: LinkIcon,
    iconForeground: 'text-teal-700 dark:text-teal-400',
    iconBackground: 'bg-teal-50 dark:bg-teal-500/10',
    demo:'https://gettrimly.vercel.app',
    github:'https://github.com/mayuripaliwal/url-shortener',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-6xl font-semibold tracking-wide text-amber-600 dark:text-amber-400">
              Projects
            </p>

            <h2 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Things I've built
            </h2>
          </div>

          {/* Project card */}
          <div className="mt-12"></div>
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-sm sm:grid sm:divide-y-0 dark:divide-white/10 dark:bg-gray-900 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/20">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1 ? 'rounded-br-lg rounded-bl-lg sm:rounded-bl-none' : '',
            'group relative border-gray-200 bg-white p-6 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-600 sm:odd:not-nth-last-2:border-b sm:even:border-l sm:even:not-last:border-b dark:border-white/10 dark:bg-gray-800/50 dark:focus-within:outline-amber-500',
          )}
        >
          <div>
            <span className={classNames(action.iconBackground, action.iconForeground, 'inline-flex rounded-lg p-3')}>
              <action.icon aria-hidden="true" className="size-6" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">
                {/* Extend touch target to entire panel */}
                {action.title}
            </h3>
            <p className="mt-2 text-2xl text-gray-500 dark:text-gray-400">
              {action.description}
            </p>
            <p className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-200">
              {action.technologies}
            </p>
          </div>
          {/* Links */}
          <div className="mt-8 flex items-center gap-x-6">
            <a
              href={action.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-amber-600 px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-amber-500  dark:bg-amber-400 dark:transition dark:hover:bg-amber-300"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>

            <a
              href={action.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-amber-600 px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-amber-500  dark:bg-amber-400 dark:transition dark:hover:bg-amber-300"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  )
}
