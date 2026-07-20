"use client";

// Define the props for our Profile Header
interface ProfileHeaderProps {
  oldGpa: number | "";
  onOldGpaChange: (gpa: number | "") => void;
  oldCredits: number | "";
  onOldCreditsChange: (credits: number | "") => void;
  programName: string;
  onProgramNameChange: (name: string) => void;
  NumberOfCourses: number | "";
  onNumberOfCoursesChange: (courses: number | "") => void;
}

export default function ProfileHeader({
  oldGpa,
  onOldGpaChange,
  oldCredits,
  onOldCreditsChange,
  programName,
  onProgramNameChange,
  NumberOfCourses,
  onNumberOfCoursesChange,
}: ProfileHeaderProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-black-200 shadow-sm space-y-4">
      <h3 className="text-xs font-extrabold text-black-600 uppercase tracking-wider">
        Student profile
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Program Name Input */}
        <div>
          <label className="block text-[10px] font-bold text-black-600 uppercase tracking-wider mb-1">
            Program / Degree
          </label>
          <select
            value={programName || ""}
            onChange={(e) => onProgramNameChange(e.target.value)}

            className="w-full p-2 border rounded-lg text-sm bg-transparent  border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-900 "
          >
            <option value="" disabled className="bg-white text-black-900">
              Select Program
            </option>
            <option value="BSc Accounting" className="bg-white text-black-900">
              BSc Accounting
            </option>
            <option
              value="BSc Information Technology"
              className="bg-white text-black-900"
            >
              BSc Information Technology
            </option>
            <option
              value="BSc Software Development"
              className="bg-white text-black-900"
            >
              BSc Software Development
            </option>
            <option
              value="BSc Entrepreneurship"
              className="bg-white text-black-900"
            >
              BSc Entrepreneurship
            </option>
            <option
              value="BSc Biochemistry"
              className="bg-white text-black-900"
            >
              BSc Biochemistry
            </option>
            <option
              value="BSc Medical Laboratory Science"
              className="bg-white text-black-900"
            >
              BSc Medical Laboratory Science
            </option>
            <option value="BSc Nursing" className="bg-white text-black-900">
              BSc Nursing
            </option>
            <option value="BSc Pharmacy" className="bg-white text-black-900">
              BSc Pharmacy
            </option>
            <option
              value="BSc mechanical Engineering"
              className="bg-white text-black-900"
            >
              BSc Mechanical Engineering
            </option>
            <option
              value="BSc Civil Engineering"
              className="bg-white text-black-900"
            >
              BSc Civil Engineering
            </option>
             <option
              value="BSc Medicine"
              className="bg-white text-black-900"
            >
              BSc Medicine
            </option>
             <option
              value="BSc Petroleum Engineering"
              className="bg-white text-black-900"
            >
              BSc Petroleum Engineering
            </option>
            <option
              value="other"
              className="bg-white text-black-900 italic text-sm"
            >
              Other
            </option>
          </select>
        </div>

        {/* Old / Current GPA Input */}
        <div>
          <label className="block text-[10px] font-bold text-black-500 uppercase tracking-wider mb-1">
            Current Cumulative GPA
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="4.0"
            placeholder="e.g. 3.9"
            value={oldGpa}
            onChange={(e) => {
              const val =
                e.target.value === "" ? "" : parseFloat(e.target.value);
              onOldGpaChange(val);
            }}
            // Overrode dark background to light yellow and ensured text remains visible dark black
            className="w-full p-2 border rounded-lg text-sm bg-transparent border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-900"
          />
        </div>

        {/* Prior Total Earned Credits Input */}
        <div>
          <label className="block text-[10px] font-bold text-black-500 uppercase tracking-wider mb-1">
            Credit hours completed
          </label>
          <input
            type="number"
            min="0"
            placeholder="e.g. 45"
            value={oldCredits}
            onChange={(e) => {
              const val =
                e.target.value === "" ? "" : parseInt(e.target.value, 10);
              onOldCreditsChange(val);
            }}
            // Overrode dark background to light yellow and ensured text remains visible dark black
            className="w-full p-2 border rounded-lg text-sm bg-transparent  border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-900"
          />
        </div>
        {/* Current number of courses */}
        <div>
          <label className="block text-[10px] font-bold text-black-500 uppercase tracking-wider mb-1">
            Current Number of Courses
          </label>
          <input
            type="number"
            min="0"
            placeholder="4 or 5"
            value={NumberOfCourses}
            onChange={(e) => {
              const val =
                e.target.value === "" ? "" : parseInt(e.target.value, 10);
              onNumberOfCoursesChange(val);
            }}
            // Overrode dark background to light yellow and ensured text remains visible dark black
            className="w-full p-2 border rounded-lg text-sm bg-transparent  border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-900"
          />
        </div>
      </div>
    </div>
  );
}
