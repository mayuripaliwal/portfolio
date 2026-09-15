const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "Dart"],
  },
  {
    title: "Backend & Web",
    skills: ["FastAPI", "React", "Flutter", "REST APIs"],
  },
  {
    title: "Databases & Infrastructure",
    skills: ["PostgreSQL", "Redis", "MySQL", "SQLite", "Firebase"],
  },
  {
    title: "CS & Tools",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Git",
      "GitHub Actions",
      "CI/CD",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-4xl font-semibold tracking-wide text-amber-600 sm:text-5xl lg:text-6xl dark:text-amber-400">
            Skills
          </p>

          <h2 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Tools I work with
          </h2>
        </div>

        {/* Skills */}
        <div className="mt-12 grid max-w-5xl grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}