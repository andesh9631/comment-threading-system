import { MessageSquare } from "lucide-react";
import Controls from "./Controls";
import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentForm";
import InfoPanels from "./InfoPanels";

const CommentThreadingSystem = ({
  post,
  currentUser,
  setCurrentUser,
  viewType,
  setViewType,
  onRunTests,
  newComment,
  setNewComment,
  addComment,
  comments,
  replyingTo,
  replyText,
  setReplyText,
  collapsedThreads,
  expandedReplies,
  handleVote,
  handleReply,
  handleCancelReply,
  handleSubmitReply,
  handleToggleCollapse,
  handleToggleExpandReplies,
}) => {
  return (
    <div className="w-full px-40 mx-auto my-20 p-6 bg-transparent min-h-screen">
      {/* Header */}
      <div className="bg-white/20 rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
          <MessageSquare className="w-8 h-8 mr-3" />
          {post.title}
        </h1>
        <p className="text-white/80 font-medium text-lg">
          A fully-featured comment threading system with nested replies, voting,
          collapsible threads, and "show more" functionality.
        </p>
      </div>

      {/* Controls */}
      <Controls
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        viewType={viewType}
        setViewType={setViewType}
        onRunTests={onRunTests}
      />

      {/* Add Comment Form */}
      <AddCommentForm
        newComment={newComment}
        setNewComment={setNewComment}
        currentUser={currentUser}
        onSubmit={() => addComment(newComment)}
      />

      {/* Comments List */}
      <CommentsList
        comments={comments}
        viewType={viewType}
        replyingTo={replyingTo}
        replyText={replyText}
        collapsedThreads={collapsedThreads}
        expandedReplies={expandedReplies}
        onVote={handleVote}
        onReply={handleReply}
        onCancelReply={handleCancelReply}
        onSubmitReply={handleSubmitReply}
        onToggleCollapse={handleToggleCollapse}
        onToggleExpandReplies={handleToggleExpandReplies}
        setReplyText={setReplyText}
      />

      {/* Info Panels */}
      {/* <InfoPanels /> */}
    </div>
  );
};

export default CommentThreadingSystem;
