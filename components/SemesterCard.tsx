// src/app/gpa-calculator/_components/GPAStatsSummary.tsx
"use client";



interface GPAStatsSummaryProps {
  semesterGpa: number;
  projectedCumulativeGpa: number;
  totalCreditsCombined: number;
  showComparison?: boolean;
  oldGpa?: number | "";
}

export default function GPAStatsSummary({
  semesterGpa,
  projectedCumulativeGpa,
  totalCreditsCombined,
  showComparison = false,
  oldGpa = "",
}: GPAStatsSummaryProps) {
  // Quick check to see if the cumulative GPA improved or dropped compared to before
  const isImproved =
    typeof oldGpa === "number" && projectedCumulativeGpa > oldGpa;
  const isSame =
    typeof oldGpa === "number" && projectedCumulativeGpa === oldGpa;

  return (
    <div className="space-y-3">
      {/* Fixed text-black-300 to standard text-gray-400 for consistency */}
      <h3 className="text-xs font-extrabold text-black-400  uppercase tracking-wider">
        Anticipated Results
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1: Semester GPA */}
        <div className="bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 p-5 rounded-xl text-center shadow-sm">
          <span className="block text-[15px] font-bold text-blue-600 uppercase tracking-wider">
            Projected Semester GPA
          </span>
          <p className="text-4xl font-extrabold text-blue-900  mt-2">
            {isNaN(semesterGpa) ? "0.00" : semesterGpa.toFixed(2)}
          </p>
        </div>

        {/* Card 2: Projected Cumulative GPA */}
        <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 p-5 rounded-xl text-center shadow-sm relative overflow-hidden">
          <span className="block text-[15px] font-bold text-emerald-600 uppercase tracking-wider">
            Est. Cumulative GPA
          </span>
          <p className="text-4xl font-extrabold text-emerald-900 mt-2">
            {isNaN(projectedCumulativeGpa)
              ? "0.00"
              : projectedCumulativeGpa.toFixed(2)}
          </p>

          {/* Micro comparison badge */}
          {showComparison && typeof oldGpa === "number" && (
            <div className="mt-2 text-[15px] font-medium">
              {isImproved ? (
                <span className="text-emerald-600">
                  ▲ Up from {oldGpa.toFixed(2)}
                </span>
              ) : isSame ? (
                <span className="text-black-500 t">
                  No change from {oldGpa.toFixed(2)}
                </span>
              ) : (
                <span className="text-red-500">
                  ▼ Down from {oldGpa.toFixed(2)}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Card 3: Total Credits (Swapped dark black layout for light yellow) */}
        <div className="bg-gray-300 border border-gray-200 dark:border-yellow-200/60 p-5 rounded-xl text-center shadow-sm">
          <span className="block text-[15px] font-bold text-black-500 uppercase tracking-wider">
            Total Combined Credits
          </span>
          <p className="text-4xl font-extrabold text-gray-800  mt-2">
            {totalCreditsCombined}
          </p>
        </div>
      </div>
    </div>
  );
}
