import { MessageSquare } from "lucide-react";
import CommentItem from "./CommentItem";

const CommentsList = ({
  comments,
  viewType,
  replyingTo,
  replyText,
  collapsedThreads,
  expandedReplies,
  onVote,
  onReply,
  onCancelReply,
  onSubmitReply,
  onToggleCollapse,
  onToggleExpandReplies,
  setReplyText,
}) => {

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">
          Comments ({comments.length})
        </h2>
        <span className="text-sm text-white/60">
          View:{" "}
          {viewType === "tree" ? "Threaded (Nested)" : "Flat (Chronological)"}
        </span>
      </div>

      {viewType === "flat" && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Flat View:</strong> All comments and replies are shown in
            chronological order without nesting. Replies are marked with
            indicators showing their parent comment.
          </p>
        </div>
      )}

      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isNested={false}
          viewType={viewType}
          replyingTo={replyingTo}
          replyText={replyText}
          collapsedThreads={collapsedThreads}
          expandedReplies={expandedReplies}
          onVote={onVote}
          onReply={onReply}
          onCancelReply={onCancelReply}
          onSubmitReply={onSubmitReply}
          onToggleCollapse={onToggleCollapse}
          onToggleExpandReplies={onToggleExpandReplies}
          setReplyText={setReplyText}
        />
      ))}
    </div>
  );
};

export default CommentsList;
