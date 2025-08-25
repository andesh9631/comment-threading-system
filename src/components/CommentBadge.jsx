const CommentBadge = ({ type, text, className = "" }) => {
  const badgeStyles = {
    depth: "bg-blue-100 text-blue-800",
    reply: "bg-gray-100 text-gray-600",
    count: "bg-purple-100 text-purple-800",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded ${badgeStyles[type]} ${className}`}
    >
      {text}
    </span>
  );
};

export default CommentBadge;
