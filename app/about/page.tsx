"use client";

export default function AboutUsPage() {
  const platformPillars = [
    {
      title: "Real-Time Clarity",
      description:
        "No more waiting until the end of the semester. Instantly preview how single scores impact your cumulative GPA.",
      icon: "⚡",
    },
    {
      title: "Built for UENR",
      description:
        "Tailored precisely around the UENR grading scale structure, ensuring your forecasts match official transcripts.",
      icon: "🇬🇭",
    },
    {
      title: "Privacy First",
      description:
        "Your academic data is yours alone. Calculations run completely client-side right inside your browser.",
      icon: "🔒",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 space-y-12 sm:space-y-16 overflow-x-hidden min-w-0">
      {/* Platform Mission / Hero Section */}
      <section className="text-center space-y-4 pt-4">
        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold rounded-full tracking-wide">
          Our Mission
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Empowering Academic Strategy
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          This portal helps you understand and predict your academic performance. It gives you a clear view of your grades and progress so you can make better decisions.

        </p>
      </section>

      <hr className="border-gray-200" />

      {/* Grid Section: Core Values / What the app does */}
      <section className="space-y-4">
        <div>
          <h3 className="text-xs font-extrabold text-black-200 uppercase tracking-wider">
            Why Use This Portal?
          </h3>
          <p className="text-[12px] sm:text-xs text-gray-600">
            Designed to remove tedious calculations and give you instant
            feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {platformPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-xl">
                {pillar.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Credit Spotlight Card */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-extrabold text-black uppercase tracking-wider">
            Behind the Architecture
          </h3>
          <p className="text-[11px] sm:text-lg text-gray-700">
            Meet the developer who designed and engineered this system.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-lg font-extrabold text-gray-900">
                Ohene Emmanuel Kwakye
              </h4>
              <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                Software Developer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              I am a software developer specializing in backend architecture,
              robust API design, and logical database systems. Balancing
              academic accounting with data engineering, I built this entire
              portal from the ground up to provide my peers with a clean,
              responsive, and completely automated grade management toolkit.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="text-[12px] font-medium px-2 py-0.5 bg-yellow-500 border border-gray-200 rounded text-black shadow-xs"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 flex gap-2">
            <a
              href="https://github.com/oheneemmanuel"
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none text-center px-4 py-2 text-xs font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-xs transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Open Source Callout */}
      <blockquote className="bg-blue-50/40 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <p className="text-xs sm:text-sm text-blue-900 font-medium leading-relaxed">
          💡 <strong>Want to collaborate or check out the code?</strong> This
          project was engineered transparently. If you have feature suggestions
          or architectural feedback, reach out or contribute via my repository
          updates.
        </p>
      </blockquote>
    </main>
  );
}
