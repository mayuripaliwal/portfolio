import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'
const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/mayuripaliwal',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mayuripaliwal/',
    icon: FaLinkedin,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/mayuripaliwal/',
    icon: SiLeetcode,
  },
  {
    name: 'Email',
    href: 'mailto:mayuripaliwal8@gmail.com',
    icon: FaEnvelope,
  },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.name === 'Email' ? undefined : '_blank'}
              rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
          &copy; 2026 Mayuri Paliwal
        </p>
      </div>
    </footer>
  )
}
