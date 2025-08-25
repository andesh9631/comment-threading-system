import CommentActions from "./CommentActions";
import CommentHeader from "./CommentHeader";
import ReplyForm from "./ReplyForm";
import ShowMoreButton from "./ShowMoreButton";

const CommentItem = ({
  comment,
  isNested,
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
  const isCollapsed = collapsedThreads.has(comment.id);
  const isExpanded = expandedReplies.has(comment.id);
  const hasReplies = comment.replies.length > 0;

  // Auto-collapse threads that exceed 10 replies (as specified in PDF)
  const shouldShowCollapseButton = hasReplies && comment.replies.length >= 10;

  // Show more functionality - show first 3 replies, then "show more" button
  const INITIAL_REPLY_COUNT = 3;
  const shouldShowMoreButton =
    hasReplies &&
    comment.replies.length > INITIAL_REPLY_COUNT &&
    viewType === "tree";
  const visibleReplies =
    shouldShowMoreButton && !isExpanded
      ? comment.replies.slice(0, INITIAL_REPLY_COUNT)
      : comment.replies;

  // In flat view, don't show nesting or replies (they're shown separately)
  const showReplies = viewType === "tree" && hasReplies && !isCollapsed;
  const showCollapseButton = viewType === "tree" && shouldShowCollapseButton;

  return (
    <div
      className={`${
        isNested && viewType === "tree"
          ? "ml-6 border-l-2 border-gray-200 pl-4"
          : ""
      } mb-4`}
    >
      <div className="bg-white/20 rounded-lg shadow-sm border border-gray-200 p-4">
        <CommentHeader
          comment={comment}
          viewType={viewType}
          onCollapseToggle={() => onToggleCollapse(comment.id)}
          showCollapseButton={showCollapseButton}
          isCollapsed={isCollapsed}
        />

        <p className="text-white/90 font-semibold mb-3">{comment.content}</p>

        <CommentActions
          comment={comment}
          onVote={onVote}
          onReply={() => onReply(comment.id)}
          canReply={comment.depth < 4}
        />

        {replyingTo === comment.id && (
          <ReplyForm
            replyText={replyText}
            setReplyText={setReplyText}
            onSubmit={() => onSubmitReply(comment.id)}
            onCancel={onCancelReply}
            parentUser={comment.user}
          />
        )}
      </div>

      {showReplies && (
        <div className="mt-2">
          {visibleReplies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              isNested={true}
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

          {shouldShowMoreButton && (
            <ShowMoreButton
              onClick={() => onToggleExpandReplies(comment.id)}
              isExpanded={isExpanded}
              replyCount={comment.replies.length - INITIAL_REPLY_COUNT}
            />
          )}
        </div>
      )}

      {viewType === "tree" && isCollapsed && (
        <div className="mt-2 ml-4 p-3 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>{comment.replies.length} replies collapsed.</strong> Click
            "Long Thread" button above to expand and view all replies.
          </p>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
