import { ChevronDown, ChevronRight } from "lucide-react";

const CollapseButton = ({ onClick, isCollapsed, replyCount }) => (
  <button
    onClick={onClick}
    className="text-gray-500 hover:text-gray-700 flex items-center space-x-1 transition-colors"
    title={`Thread has ${replyCount} replies - click to ${
      isCollapsed ? "expand" : "collapse"
    }`}
  >
    {isCollapsed ? (
      <ChevronRight className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    )}
    <span className="text-xs">Long Thread</span>
  </button>
);

export default CollapseButton;
