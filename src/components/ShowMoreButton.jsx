import { MoreHorizontal } from "lucide-react";

const ShowMoreButton = ({ onClick, isExpanded, replyCount }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors mt-2 text-sm"
  >
    <MoreHorizontal className="w-4 h-4" />
    <span>
      {isExpanded
        ? "Show less"
        : `Show ${replyCount} more ${replyCount === 1 ? "reply" : "replies"}`}
    </span>
  </button>
);

export default ShowMoreButton;
