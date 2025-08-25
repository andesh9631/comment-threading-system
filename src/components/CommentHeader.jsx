import { User } from "lucide-react";
import { formatTimestamp } from "../lib";
import CollapseButton from "./CollapseButton";
import CommentBadge from "./CommentBadge";

const CommentHeader = ({
  comment,
  viewType,
  onCollapseToggle,
  showCollapseButton,
  isCollapsed,
}) => (
  <div className="flex items-start justify-between mb-2">
    <div className="flex items-center space-x-2 flex-wrap">
      <User className="w-5 h-5 text-white" />
      <span className="font-semibold text-white">{comment.user}</span>
      <span className="text-sm text-white/70">•</span>
      <span className="text-sm text-white/70">
        {formatTimestamp(comment.timestamp)}
      </span>

      {comment.depth > 0 && (
        <CommentBadge
          type="depth"
          text={
            viewType === "flat"
              ? `Reply to ${
                  comment.parent_comment_id
                    ? "Comment #" + comment.parent_comment_id
                    : "Unknown"
                }`
              : `Depth: ${comment.depth}`
          }
        />
      )}

      {viewType === "flat" && comment.parent_comment_id && (
        <CommentBadge type="reply" text="↳ Reply" />
      )}

      {comment.replies.length > 0 && (
        <CommentBadge
          type="count"
          text={`${comment.replies.length} ${
            comment.replies.length === 1 ? "reply" : "replies"
          }`}
        />
      )}
    </div>

    {showCollapseButton && (
      <CollapseButton
        onClick={onCollapseToggle}
        isCollapsed={isCollapsed}
        replyCount={comment.replies.length}
      />
    )}
  </div>
);

export default CommentHeader;
