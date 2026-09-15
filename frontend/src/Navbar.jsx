import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon,ArrowDownIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="mr-2 -ml-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-amber-600 focus:outline-hidden focus:ring-inset dark:hover:bg-white/5 dark:hover:text-white dark:focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex shrink-0 items-center">
              <p
              className="px-1 pt-1 text-xl font-medium text-gray-900 dark:border-amber-500 dark:text-white"
              >Mayuri Paliwal
              </p>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Current: "border-amber-600 text-gray-900 dark:border-amber-500 dark:text-white", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white" */}
              <a
                href="#about"
                className="inline-flex items-center border-b-2 border-amber-600 px-1 pt-1 text-xl font-medium text-gray-900 dark:border-amber-500 dark:text-white"
              >
                About
              </a>
              <a
                href='#projects'
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white"
              >
                Skills
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="shrink-0">
              <a
                href="/Mayuri_Paliwal_Resume.pdf"
                download="Mayuri_Paliwal_Resume.pdf"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs transition hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 dark:bg-amber-400 dark:shadow-none dark:hover:bg-amber-300 dark:focus-visible:outline-amber-300"
              >
                
                <ArrowDownIcon aria-hidden="true" className="-ml-0.5 size-6" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {/* Current: "bg-amber-50 border-amber-600 text-amber-700 dark:border-amber-500 dark:bg-amber-600/10 dark:text-amber-400", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white" */}
          <DisclosureButton
            as="a"
            href="#about"
            className="block border-l-4 border-amber-600 bg-amber-50 py-2 pr-4 pl-3 text-base font-medium text-amber-700 sm:pr-6 sm:pl-5 dark:border-amber-500 dark:bg-amber-600/10 dark:text-amber-400"
          >
            About
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#projects"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 sm:pr-6 sm:pl-5 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#experience"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 sm:pr-6 sm:pl-5 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
          >
            Experience
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#skills"
            className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 sm:pr-6 sm:pl-5 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
          >
            Skills
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
