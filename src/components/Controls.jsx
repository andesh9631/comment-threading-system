import { Square, TreePalm } from "lucide-react";

const Controls = ({
  currentUser,
  setCurrentUser,
  viewType,
  setViewType,
  onRunTests,
}) => (
  // <div className="bg-white/20 rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
  //   <div className="flex flex-wrap items-center justify-between gap-4">
  //     <div className="flex items-center space-x-4">
  //       <label className="text-sm font-medium text-white/80">
  //         Current User:
  //       </label>
  //       <select
  //         value={currentUser}
  //         onChange={(e) => setCurrentUser(e.target.value)}
  //         className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  //       >
  //         {["User1", "User2", "User3", "User4", "User5"].map((user) => (
  //           <option key={user} value={user}>
  //             {user}
  //           </option>
  //         ))}
  //       </select>
  //     </div>

  //     <div className="flex items-center space-x-4">
  //       <label className="text-sm font-medium text-white/80">View:</label>
  //       <div className="flex space-x-2">
  //         <button
  //           onClick={() => setViewType("tree")}
  //           className={`px-4 py-2 rounded transition-colors flex items-center gap-3 ${
  //             viewType === "tree"
  //               ? "bg-blue-600 text-white/80"
  //               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
  //           }`}
  //         >
  //           <TreePalm className="w-6 h-6 text-white/80" />
  //           Tree View
  //         </button>
  //         <button
  //           onClick={() => setViewType("flat")}
  //           className={`px-4 py-2 rounded transition-colors flex items-center gap-3 ${
  //             viewType === "flat"
  //               ? "bg-blue-600 text-white"
  //               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
  //           }`}
  //         >
  //           <Square className="w-6 h-6 text-gray-700" />
  //           Flat View
  //         </button>
  //       </div>

  //       <button
  //         onClick={onRunTests}
  //         className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm transition-colors"
  //         title="Run PDF test cases in browser console"
  //       >
  //         🧪 Run Tests
  //       </button>
  //     </div>
  //   </div>
  // </div>

  <div className="bg-white/20 rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* Current User */}
      <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
        <label className="text-sm font-medium text-white/80">
          Current User:
        </label>
        <select
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
          className="border border-gray-300 rounded px-2 sm:px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        >
          {["User1", "User2", "User3", "User4", "User5"].map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <label className="text-sm font-medium text-white/80">View:</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setViewType("tree")}
            className={`px-3 sm:px-4 py-2 rounded transition-colors flex items-center gap-2 sm:gap-3 ${
              viewType === "tree"
                ? "bg-blue-600 text-white/80"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <TreePalm className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
            Tree View
          </button>
          <button
            onClick={() => setViewType("flat")}
            className={`px-3 sm:px-4 py-2 rounded transition-colors flex items-center gap-2 sm:gap-3 ${
              viewType === "flat"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Square className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            Flat View
          </button>
        </div>

        <button
          onClick={onRunTests}
          className="px-3 sm:px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-xs sm:text-sm transition-colors"
          title="Run PDF test cases in browser console"
        >
          🧪 Run Tests
        </button>
      </div>
    </div>
  </div>
);

export default Controls;
