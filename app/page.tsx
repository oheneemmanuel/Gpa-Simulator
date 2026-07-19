// app/page.tsx (Server Component by default)
import { Sparkles, GraduationCap, ArrowRight, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Hero Section Container */}
      <section className="border-b-2 border-slate-950 w-full max-w-5xl px-6 py-16 md:py-24">
        {/* Two-Column Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Headline and CTA */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            {/* Decorative Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4 fill-yellow-500 text-yellow-600" />
              <span>Plan your academic goals easily</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-tight mb-4">
              Welcome to{" "}
              <span className="bg-yellow-400 px-2 py-0.5 rounded-md inline-block transform -rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-slate-950">
                GPA.sim
              </span>
            </h1>

            <p className="text-lg text-slate-700 font-medium mb-8 max-w-md">
              Your ultimate GPA simulation tool. Add your courses, simulate your
              results, and chart your path to academic success with ease.
            </p>

            <a
              href="/gpa-calculator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-slate-950 font-black rounded-xl border-2 border-slate-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <GraduationCap className="w-5 h-5" />
              Start Simulating
            </a>

            <p className="mt-8 text-xs font-semibold text-slate-400 tracking-wide">
              * Remember to double check your department syllabus guidelines.
            </p>
          </div>

          {/* Right Column: Book Illustration Card */}
          <div className="flex justify-center items-center">
            <div className="relative bg-yellow-400 border-2 border-slate-950 rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm aspect-square flex items-center justify-center overflow-hidden">
              <Image
                src="/gpa-im-1.jpg"
                alt="Minimalist stack of academic textbooks representing your school courses"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover p-2 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GPA.sim? */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24">
        {/* Title block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight mb-4">
            Why Choose GPA.sim?
          </h2>
          <p className="text-slate-600 font-bold max-w-md mx-auto text-sm tracking-wide uppercase">
            Designed to simplify your academic planning
          </p>
        </div>

        {/* 3-Card Responsive Grid (Static, No animations) */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1: Easy Simulation */}
          <div className="overflow-hidden rounded-2xl border-2 border-black bg-[#DCDCDC] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-950 mb-4">
                Easy Simulation
              </h3>
              <p className="text-base text-slate-700 font-medium leading-relaxed">
                Quickly add your courses and instantly calculate your semester
                grades with zero manual math.
              </p>
            </div>
          </div>

          {/* Card 2: Goal Targeter */}
          <div className="overflow-hidden rounded-2xl border-2 border-black bg-[#DCDCDC] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-950 mb-4">
                Target Goals
              </h3>
              <p className="text-base text-slate-700 font-medium leading-relaxed">
                Input your target GPA and instantly find out exactly what grades
                you need to achieve.
              </p>
            </div>
          </div>

          {/* Card 3: Visual Progress */}
          <div className="overflow-hidden rounded-2xl border-2 border-black bg-[#DCDCDC] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-950 mb-4">
                Visual Progress
              </h3>
              <p className="text-base text-slate-700 font-medium leading-relaxed">
                Visualize your academic trajectory to make smart, informed
                choices for your semesters ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Quick, lightweight overview) */}
      <section className="border-b-2 border-slate-950 w-full max-w-5xl px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-950 mb-2">
            How It Works
          </h2>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-wider">
            Three simple steps to plan your semester
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-center gap-4 bg-white border-2 border-slate-950 p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full md:w-1/3">
            <span className="bg-yellow-400 border border-slate-950 font-black px-3 py-1.5 rounded-lg text-lg">
              1
            </span>
            <div>
              <h4 className="font-bold text-slate-950 text-sm">
                Input Prior Credits
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                Add past hours to keep your cumulative GPA accurate.
              </p>
            </div>
          </div>

          <ArrowRight className="hidden md:block w-5 h-5 text-slate-400" />

          {/* Step 2 */}
          <div className="flex items-center gap-4 bg-white border-2 border-slate-950 p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full md:w-1/3">
            <span className="bg-yellow-400 border border-slate-950 font-black px-3 py-1.5 rounded-lg text-lg">
              2
            </span>
            <div>
              <h4 className="font-bold text-slate-950 text-sm">
                Add Your Courses
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                Enter course credit hours and estimated grades.
              </p>
            </div>
          </div>

          <ArrowRight className="hidden md:block w-5 h-5 text-slate-400" />

          {/* Step 3 */}
          <div className="flex items-center gap-4 bg-white border-2 border-slate-950 p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full md:w-1/3">
            <span className="bg-yellow-400 border border-slate-950 font-black px-3 py-1.5 rounded-lg text-lg">
              3
            </span>
            <div>
              <h4 className="font-bold text-slate-950 text-sm">
                Simulate and Track
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                Instantly watch your projected CGPA adjust in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUESTIONS & ANSWERS (FAQ) */}
      <section className="border-b-2 border-slate-950 w-full max-w-5xl px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex p-2 bg-yellow-100 rounded-lg text-yellow-800 border border-yellow-200 mb-3">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-black text-slate-950 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-wider">
            Everything you need to know about calculating grades
          </p>
        </div>

        <div className="grid gap-6 max-w-3xl mx-auto ">
          {/* FAQ 1 */}
          <div className="bg-white border-2 border-slate-950 p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
            <h4 className="font-black text-slate-950 text-base mb-2">
              Is my academic data safe with GPA.sim?
            </h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Absolutely! Your calculations happen directly inside your web
              browser. We do not store, track, or save your courses or grades on
              any external server.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-white border-2 border-slate-950 p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
            <h4 className="font-black text-slate-950 text-base mb-2">
              Does this support different grading point scales?
            </h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Yes. The main simulator supports standard grade-to-point
              configurations. Be sure to align your credit-hour weights
              according to your institution&apos;s department syllabus rules.
            </p>
          </div>
        </div>
      </section>

    
    </div>
  );
}
