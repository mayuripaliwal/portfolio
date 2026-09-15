const stats = [
  { id: 1, name: 'LeetCode Problems Solved', value: '600+' },
  { id: 2, name: 'Peak Contest Rating', value: '1736' }
]

export default function Achievements() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-22 text-6xl font-semibold tracking-wide text-amber-600 dark:text-amber-400">
              Achievements
          </p>
        </div>
        <a
  href="https://leetcode.com/u/mayuripaliwal/"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600 dark:text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        </a>
      </div>
    </div>
  )
}
