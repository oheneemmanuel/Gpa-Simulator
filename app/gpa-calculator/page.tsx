"use client";

import { useState, useMemo } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import GPAStatsSummary from "@/components/SemesterCard";

export interface CourseData {
  id: string;
  name: string;
  credits: number | "";
  score: number | "";
}

const UENR_SCALE = [
  { grade: "A", minPercent: 80, gp: 4.0 },
  { grade: "B+", minPercent: 75, gp: 3.5 },
  { grade: "B", minPercent: 70, gp: 3.0 },
  { grade: "C+", minPercent: 65, gp: 2.5 },
  { grade: "C", minPercent: 60, gp: 2.0 },
  { grade: "D+", minPercent: 55, gp: 1.5 },
  { grade: "D", minPercent: 50, gp: 1.0 },
  { grade: "E/F", minPercent: 0, gp: 0.0 },
];

export default function GPACalculator() {
  const [programName, setProgramName] = useState("");
  const [oldGpa, setOldGpa] = useState<number | "">(3.22);
  const [oldCredits, setOldCredits] = useState<number | "">(45);

  const [courses, setCourses] = useState<CourseData[]>([
    { id: "initial-course-1", name: "", credits: "", score: "" },
  ]);

  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: "", credits: "", score: "" },
    ]);
  };

  const updateField = (id: string, field: keyof CourseData, value: any) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, [field]: value } : course,
      ),
    );
  };

  const deleteCourse = (id: string) => {
    if (courses.length <= 1) {
      setCourses([
        { id: "initial-course-1", name: "", credits: "", score: "" },
      ]);
      return;
    }
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  // Live Calculations & Grade previewing
  const stats = useMemo(() => {
    let totalCredits = 0;
    let totalQualityPoints = 0;

    const calculatedCourses = courses.map((course) => {
      const parsedCredits = Number(course.credits);
      const numericScore = Number(course.score);

      let letterGrade = "-";
      let gp = 0;

      if (course.score !== "" && !isNaN(numericScore)) {
        const found = UENR_SCALE.find(
          (item) => numericScore >= item.minPercent,
        ) || { grade: "E/F", gp: 0 };
        letterGrade = found.grade;
        gp = found.gp;
      }

      if (course.score !== "" && !isNaN(parsedCredits) && parsedCredits > 0) {
        totalCredits += parsedCredits;
        totalQualityPoints += gp * parsedCredits;
      }

      return { ...course, letterGrade, gp };
    });

    const semesterGpa =
      totalCredits > 0 ? totalQualityPoints / totalCredits : 0;
    const previousCredits = typeof oldCredits === "number" ? oldCredits : 0;
    const previousGpa = typeof oldGpa === "number" ? oldGpa : 0;
    const combinedCredits = previousCredits + totalCredits;
    const projectedCumulativeGpa =
      combinedCredits > 0
        ? (previousCredits * previousGpa + totalQualityPoints) / combinedCredits
        : 0;

    return {
      semesterGpa,
      projectedCumulativeGpa,
      totalCreditsCombined: combinedCredits,
      calculatedCourses,
    };
  }, [courses, oldGpa, oldCredits]);

  return (
    // overflow-x-hidden acts as a baseline block to keep phone layout frames locked in tight
    <main className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8 overflow-x-hidden min-w-0">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 black:text-white">
          See Your GPA In Real-Time
        </h1>
        <p className="text-xs sm:text-sm text-black-500 ">
          Track your academic progress and see how your grades impact your
          cumulative GPA.
        </p>
      </div>

      <ProfileHeader
        programName={programName}
        onProgramNameChange={setProgramName}
        oldGpa={oldGpa}
        onOldGpaChange={setOldGpa}
        oldCredits={oldCredits}
        onOldCreditsChange={setOldCredits}
      />
      <div>
        <h3 className="text-xs font-extrabold text-black-600 uppercase tracking-wider">
          Semester Courses
        </h3>
        <p className="text-[11px] sm:text-xs text-black-500">
          Enter your courses, credit hours, and scores to see your semester GPA
          and projected cumulative GPA.
        </p>
      </div>

      {/* Styled Grid/Table Section */}
      <section className="bg-yellow border border-gray-200 black:border--800 rounded-xl overflow-hidden shadow-sm">
        {/* Desktop/tablet table view */}
        <div className="hidden md:block w-full overflow-x-auto">
          <table className="w-full min-w-[500px] text-left border-collapse">
            <thead>
              <tr className="bg-yellow-500 border-b border-gray-200 black:border--800 tracking-wider">
                <th className="py-3 px-3 w-5/12">Course Name</th>
                <th className="py-3 px-2 w-2/12">Credits</th>
                <th className="py-3 px-2 w-2/12">Score (%)</th>
                <th className="py-3 px-2 w-1/12 text-center">Grade</th>
                <th className="py-3 px-3 w-1/12 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 black:divide--800 text-xs sm:text-sm">
              {stats.calculatedCourses.map((course) => (
                <tr
                  key={course.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-2 px-2">
                    <input
                      type="text"
                      placeholder="Bus: 201"
                      value={course.name}
                      onChange={(e) =>
                        updateField(course.id, "name", e.target.value)
                      }
                      className="w-full px-2.5 py-1.5 border border-gray-300 black:border--700 rounded-md bg-white focus:outline-blue-500 text-gray-900 text-xs sm:text-sm shadow-sm"
                    />
                  </td>
                  <td className="py-2 px-1">
                    <input
                      type="number"
                      placeholder="Credits"
                      value={course.credits}
                      onChange={(e) =>
                        updateField(
                          course.id,
                          "credits",
                          e.target.value === "" ? "" : Number(e.target.value),
                        )
                      }
                      className="w-full px-2 py-1.5 border border-gray-300 black:border--700 rounded-md bg-white focus:outline-blue-500 text-gray-900 text-xs sm:text-sm shadow-sm"
                    />
                  </td>
                  <td className="py-2 px-1">
                    <input
                      type="number"
                      placeholder="Score"
                      value={course.score}
                      onChange={(e) =>
                        updateField(
                          course.id,
                          "score",
                          e.target.value === "" ? "" : Number(e.target.value),
                        )
                      }
                      className="w-full px-2 py-1.5 border border-gray-300 black:border--700 rounded-md bg-white focus:outline-blue-500 text-gray-900 text-xs sm:text-sm shadow-sm"
                    />
                  </td>
                  <td className="py-2 px-1 text-center font-semibold text-gray-700 black:text--300">
                    <span className="inline-block px-2 py-0.5 bg-gray-100 black:bg--800 border border-gray-200 black:border--700 rounded text-[11px] sm:text-xs min-w-[28px]">
                      {course.letterGrade}
                    </span>
                  </td>
                  <td className="py-2 px-1 text-center">
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="p-1.5 text-red-500 hover:text-red-700 black:hover:bg-red-950/30 rounded-md transition-colors text-xs sm:text-sm"
                      title="Delete Course"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked-card view */}
       
        <div className="md:hidden divide-y divide-gray-100 black:divide--800">
          
          {stats.calculatedCourses.map((course) => (
            <div key={course.id} className="p-3 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <input
                  type="text"
                  placeholder="Bus: 201"
                  value={course.name}
                  onChange={(e) =>
                    updateField(course.id, "name", e.target.value)
                  }
                  className="flex-1 min-w-0 px-2.5 py-1.5 border border-gray-300 border-black rounded-md bg-white focus:outline-blue-500 text-gray-900 text-sm shadow-sm"
                />
                <button
                  onClick={() => deleteCourse(course.id)}
                  className="shrink-0 p-1.5 text-red-500 hover:text-red-700 black:hover:bg-red-950/30 rounded-md transition-colors text-sm"
                  title="Delete Course"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 items-center">
                <div>
                  <label className="block text-[9px] font-bold text-gray-400 text-black uppercase tracking-wider mb-1">
                    Credits
                  </label>
                  <input
                    type="number"
                    placeholder="Credits"
                    value={course.credits}
                    onChange={(e) =>
                      updateField(
                        course.id,
                        "credits",
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full px-2 py-1.5 border border-gray-300 black:border--700 rounded-md bg-white focus:outline-blue-500 text-gray-900 text-sm shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-gray-400 text-black tracking-wider mb-1">
                    Score (%)
                  </label>
                  <input
                    type="number"
                    placeholder="Score"
                    value={course.score}
                    onChange={(e) =>
                      updateField(
                        course.id,
                        "score",
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full px-2 py-1.5 border border-gray-300 black:border--700 rounded-md bg-white focus:outline-blue-500 text-gray-900 text-sm shadow-sm"
                  />
                </div>
                <div className="text-center">
                  <label className="block text-[9px] font-bold text-gray-400 text-black uppercase tracking-wider mb-1">
                    Grade
                  </label>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-black border border-gray-200 rounded text-xs w-full">
                    {course.letterGrade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-gray-50 border-t border-gray-200">
          <button
            onClick={addCourse}
            className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            + Add Course Row
          </button>
        </div>
      </section>

      <div>
        <h3 className="text-xs font-extrabold text-black-600 uppercase tracking-wider">
          See Results Below
        </h3>
        <p className="text-[11px] sm:text-xs text-black-500">
          Your projected semester GPA and cumulative GPA based on the courses
          entered above.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-1 shadow-sm">
        <GPAStatsSummary
          semesterGpa={stats.semesterGpa}
          projectedCumulativeGpa={stats.projectedCumulativeGpa}
          totalCreditsCombined={stats.totalCreditsCombined}
          showComparison={true}
          oldGpa={oldGpa}
        />
      </div>
    </main>
  );
}
