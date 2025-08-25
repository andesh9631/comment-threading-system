import { Reply } from "lucide-react";
import VoteButton from "./VoteButton";
import CommentScore from "./CommentScore";

const CommentActions = ({ comment, onVote, onReply, canReply }) => (
  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-2">
      <VoteButton
        type="up"
        count={comment.upvotes}
        onClick={() => onVote(comment.id, "up")}
      />
      <VoteButton
        type="down"
        count={comment.downvotes}
        onClick={() => onVote(comment.id, "down")}
      />
      <CommentScore comment={comment} />
    </div>

    {canReply && (
      <button
        onClick={onReply}
        className="flex items-center space-x-1 text-white/80 hover:text-white/80 transition-colors"
        title="Reply to this comment"
      >
        <Reply className="w-4 h-4" />
        <span>Reply</span>
      </button>
    )}
  </div>
);

export default CommentActions;
