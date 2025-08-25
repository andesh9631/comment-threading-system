import { ThumbsDown, ThumbsUp } from "lucide-react";

const VoteButton = ({ type, count, onClick, className = "" }) => {
  const Icon = type === "up" ? ThumbsUp : ThumbsDown;
  const baseColor =
    type === "up"
      ? "text-green-600 hover:text-green-700"
      : "text-red-600 hover:text-red-700";

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 ${baseColor} transition-colors ${className}`}
      title={`${type === "up" ? "Upvote" : "Downvote"} this comment`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{count}</span>
    </button>
  );
};

export default VoteButton;
