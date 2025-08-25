import { getVoteScore } from "../lib";

const CommentScore = ({ comment }) => {
  const score = getVoteScore(comment);
  const scoreColor =
    score > 0 ? "text-green-600" : score < 0 ? "text-red-600" : "text-white/70";

  return (
    <span className="text-sm text-white/70 font-medium">
      Score:{" "}
      <span className={scoreColor}>
        {score > 0 ? "+" : ""}
        {score}
      </span>
    </span>
  );
};

export default CommentScore;
