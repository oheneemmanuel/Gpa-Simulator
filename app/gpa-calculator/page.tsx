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
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">See Your GPA In Real-Time</h1>
        <p className="text-sm text-gray-500">
          Track your academic progress and see how your grades impact your cumulative GPA.
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

      {/* Styled Grid/Table Section */}
      <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold uppercase text-gray-600 tracking-wider">
                <th className="py-3 px-4 w-1/2">Course Name</th>
                <th className="py-3 px-4 w-1/6">Credits</th>
                <th className="py-3 px-4 w-1/6">Score (%)</th>
                <th className="py-3 px-4 w-1/12 text-center">Grade</th>
                <th className="py-3 px-4 w-1/12 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {stats.calculatedCourses.map((course) => (
                <tr
                  key={course.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      placeholder="Bus: 201"
                      value={course.name}
                      onChange={(e) =>
                        updateField(course.id, "name", e.target.value)
                      }
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-blue-500 bg-transparent text-sm"
                    />
                  </td>
                  <td className="py-2 px-3">
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
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-blue-500 bg-transparent text-sm"
                    />
                  </td>
                  <td className="py-2 px-3">
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
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-blue-500 bg-transparent text-sm"
                    />
                  </td>
                  <td className="py-2 px-3 text-center font-semibold text-gray-700">
                    <span className="inline-block px-2.5 py-1 bg-gray-100 rounded text-xs">
                      {course.letterGrade}
                    </span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
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

        <div className="p-3 bg-gray-50 border-t border-gray-200">
          <button
            onClick={addCourse}
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            + Add Course Row
          </button>
        </div>
      </section>

      <GPAStatsSummary
        semesterGpa={stats.semesterGpa}
        projectedCumulativeGpa={stats.projectedCumulativeGpa}
        totalCreditsCombined={stats.totalCreditsCombined}
        showComparison={true}
        oldGpa={oldGpa}
      />
    </main>
  );
}
