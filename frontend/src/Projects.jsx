import {
  LinkIcon,ChatBubbleLeftRightIcon, DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Query PDF',
    tagline: 'Get answers grounded in citations from your PDFs.',
    description: 'A full-stack document processing platform for uploading PDFs, performing semantic search, and generating AI-powered answers with source citations.',
    technologies: 'Python, FastAPI, React, PostgreSQL, pgvector, SQLAlchemy, Alembic, Redis, ARQ, Groq API',
    icon: DocumentMagnifyingGlassIcon,
    apiDocs: 'https://document-processing-platform-wwyn.onrender.com/docs',
    iconForeground: 'text-teal-700 dark:text-teal-400',
    iconBackground: 'bg-teal-50 dark:bg-teal-500/10',
    demo:'https://querypdf.vercel.app',
    github:'https://github.com/mayuripaliwal/document-processing-platform',
    video:"https://youtu.be/6why4PlcjrM",
    image: '/query-pdf.png'
  },

  {
    title: 'trimly',
    tagline: 'Keep track of all your shared links with click analytics',
    description:'A full-stack URL shortening service with authentication, Redis caching, asynchronous analytics, and rate limiting.',
    technologies:'Python, FastAPI, React, PostgreSQL, Redis, ARQ',
    href: 'https://gettrimly.vercel.app',
    icon: LinkIcon,
    apiDocs: 'https://url-shortener-f3u2.onrender.com/docs',
    iconForeground: 'text-teal-700 dark:text-teal-400',
    iconBackground: 'bg-teal-50 dark:bg-teal-500/10',
    demo:'https://gettrimly.vercel.app',
    github:'https://github.com/mayuripaliwal/url-shortener'
  },
  {
    title: 'AuthorConnect',
    tagline: 'Handle author queries faster with AI ticket classification and prioritization.',
    description:'An AI-powered author support portal for ticket management, automated categorization, and response suggestions.',
    technologies:'Python, FastAPI, React, PostgreSQL, SQLAlchemy, Alembic, Groq API',
    href: 'https://author-support-and-communication-portal-1.onrender.com/login',
    icon: ChatBubbleLeftRightIcon,
    apiDocs: 'https://author-support-and-communication-portal.onrender.com/docs',
    iconForeground: 'text-teal-700 dark:text-teal-400',
    iconBackground: 'bg-teal-50 dark:bg-teal-500/10',
    demo:'https://author-support-and-communication-portal-1.onrender.com',
    github:'https://github.com/mayuripaliwal/author-support-and-communication-portal',
    video:"https://youtu.be/mABiK-j98TI",
  }
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
            <p className="text-4xl font-semibold tracking-wide text-amber-600 sm:text-5xl lg:text-6xl dark:text-amber-400">
              Projects
            </p>

            <h2 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Things I've built
            </h2>
          </div>

          {/* Project card */}
          <div className="mt-12"></div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 divide-y divide-gray-200 rounded-lg shadow-none sm:divide-y-0 dark:divide-white/10 dark:bg-gray-900 dark:shadow-none">
      {projects.map((project, actionIdx) => (
        <div
          key={project.title}
          className="flex flex-col group relative rounded-lg border border-gray-200 
          bg-white p-6 shadow-sm focus-within:outline-2 focus-within:-outline-offset-2
           focus-within:outline-amber-600 dark:border-white/10 dark:bg-gray-800/50 
           dark:focus-within:outline-amber-500 transition-all duration-300 ease-out
           hover:-translate-y-2 hover:shadow-xl dark:hover:border-amber-400 hover:border-amber-600
           "
        >
          <div>
            <span className={classNames(project.iconBackground, project.iconForeground, 'inline-flex rounded-lg p-3')}>
              <project.icon aria-hidden="true" className="size-6" />
            </span>
          </div>          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-gray-100">
                {/* Extend touch target to entire panel */}
                {project.title}
            </h3>
            <p className="mt-2 text-2xl leading-7 text-gray-700 sm:text-2xl dark:text-gray-200">
              {project.tagline}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-500 sm:text-base dark:text-gray-400">
              {project.description}
            </p>
            <p className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-200">
              {project.technologies}
            </p>
          </div>
          {/* Links */}
          <div className="mt-auto h-full flex flex-wrap items-center gap-3 pt-8">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-amber-600 px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-amber-500  dark:bg-amber-400 dark:transition dark:hover:bg-amber-300"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-amber-600 px-4 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400/10"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            {/* API docs */}
            <a
              href={project.apiDocs}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-amber-600 px-4 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400/10"
            >
              API Docs <span aria-hidden="true">↗</span>
            </a>  
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-amber-600 px-4 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400/10"
              >
                Demo Video <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  )
}
