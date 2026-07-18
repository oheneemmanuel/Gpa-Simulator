"use client";

// Define the props for our Profile Header
interface ProfileHeaderProps {
  oldGpa: number | "";
  onOldGpaChange: (gpa: number | "") => void;
  oldCredits: number | "";
  onOldCreditsChange: (credits: number | "") => void;
  programName: string;
  onProgramNameChange: (name: string) => void;
}

export default function ProfileHeader({
  oldGpa,
  onOldGpaChange,
  oldCredits,
  onOldCreditsChange,
  programName,
  onProgramNameChange,
}: ProfileHeaderProps) {
  return (
    <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm space-y-4">
      <h3 className="text-xs font-extrabold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
        Academic Profile Baseline
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Program Name Input */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
            Program / Degree
          </label>
          <select
            value={programName || ""}
            onChange={(e) => onProgramNameChange(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm bg-transparent dark:bg-zinc-900 border-gray-300 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          >
            <option value="" disabled>
              Select Program
            </option>
            <option value="BSc Accounting">BSc Accounting</option>
            <option value="BSc Information Technology">
              BSc Information Technology
            </option>
            <option value="BSc Software Development">
              BSc Software Development
            </option>
            <option value="BSc Entrepreneurship">Entrepreneurship</option>
            <option value="BSc Biochemistry">BSc Biochemistry</option>
          </select>
        </div>

        {/* Old / Current GPA Input */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
            Current Cumulative GPA
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="4.0"
            placeholder="e.g. 3.22"
            value={oldGpa}
            onChange={(e) => {
              const val =
                e.target.value === "" ? "" : parseFloat(e.target.value);
              onOldGpaChange(val);
            }}
            className="w-full p-2 border rounded-lg text-sm bg-transparent dark:bg-zinc-900 border-gray-300 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
        </div>

        {/* Prior Total Earned Credits Input */}
        <div>
          <label className="block text-[10px] font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
            Total Earned Credits
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
            className="w-full p-2 border rounded-lg text-sm bg-transparent dark:bg-zinc-900 border-gray-300 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}