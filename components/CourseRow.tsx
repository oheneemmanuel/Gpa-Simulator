"use client";

// Define what a Course object looks like
export interface CourseData {
  id: string;
  name: string;
  credits: number;
  score: number | "";
}

interface CourseRowProps {
  course: CourseData;
  onUpdate: (updatedCourse: CourseData) => void;
  deleteCourse: (id: string) => void;
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

export default function CourseRow({
  course,
  onUpdate,
  deleteCourse,
}: CourseRowProps) {
  const isScoreEmpty = course.score === "";

  // Only look up the grade if the user has actually typed a score
  const projected = !isScoreEmpty
    ? UENR_SCALE.find(
        (tier) => (course.score as number) >= tier.minPercent,
      ) || { grade: "E/F", gp: 0.0 }
    : null;

  return (
    // Added max-w-full overflow-hidden to contain inputs and swapped dark:bg-zinc-950 with explicit light backgrounds
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white p-4 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm relative group max-w-full overflow-hidden">
      {/* Course Name */}
      <div className="md:col-span-4 min-w-0">
        <label className="block text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
          Course Name
        </label>
        <input
          type="text"
          placeholder="e.g. Financial Accounting"
          value={course.name}
          onChange={(e) => onUpdate({ ...course, name: e.target.value })}
          // Overrode dark backgrounds to a highly visible light yellow custom layout to match the baseline inputs
          className="w-full p-2 border rounded-lg text-sm bg-transparent dark:bg-yellow-50 border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-900 shadow-sm"
        />
      </div>

      {/* Credit Hours */}
      <div className="md:col-span-2 min-w-0">
        <label className="block text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
          Credits
        </label>
        <input
          type="number"
          min="1"
          max="6"
          value={course.credits || ""}
          onChange={(e) =>
            onUpdate({
              ...course,
              credits: parseInt(e.target.value, 10) || 0,
            })
          }
          className="w-full p-2 border rounded-lg text-sm bg-transparent dark:bg-yellow-50 border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-900 shadow-sm"
        />
      </div>

      {/* Score */}
      <div className="md:col-span-2 min-w-0">
        <label className="block text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
          Score (%)
        </label>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="0 - 100"
          value={course.score}
          onChange={(e) => {
            const val = e.target.value;
            const value =
              val === "" ? "" : Math.min(100, Math.max(0, Number(val)));

            onUpdate({
              ...course,
              score: value,
            });
          }}
          className="w-full p-2 border rounded-lg text-sm bg-transparent dark:bg-yellow-50 border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-900 shadow-sm"
        />
      </div>

      {/* Grade & GP Status Window */}
      <div className="md:col-span-3 text-center bg-blue-50/50 dark:bg-blue-950/20 p-2 rounded-lg border border-blue-100 dark:border-blue-900/30 min-h-[52px] flex flex-col justify-center">
        {projected ? (
          <>
            <span className="block text-[9px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
              Score ({Number(course.score).toFixed(0)}%)
            </span>
            <span className="text-sm font-extrabold text-blue-900 dark:text-blue-200">
              {projected.grade}
              <span className="text-xs font-normal text-gray-500 dark:text-zinc-400">
                {" "}
                ({projected.gp.toFixed(1)} GP)
              </span>
            </span>
          </>
        ) : (
          <span className="text-xs text-gray-400 dark:text-zinc-500 italic">
            Waiting for score...
          </span>
        )}
      </div>

      {/* Delete Action Button */}
      <div className="md:col-span-1 flex justify-center items-center pt-2 md:pt-0">
        <button
          type="button"
          onClick={() => deleteCourse(course.id)}
          aria-label="Delete course"
          className="text-gray-400 hover:text-red-500 dark:text-zinc-500 dark:hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-900 w-full md:w-auto flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
