const AddCommentForm = ({
  newComment,
  setNewComment,
  currentUser,
  onSubmit,
}) => (
  <div className="bg-white/20 rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
    <h3 className="text-lg font-semibold text-white/80 mb-3">Add a Comment</h3>
    <textarea
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="What are your thoughts?"
      className="w-full bg-white/40 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none placeholder:text-white/70"
      rows="4"
    />
    <div className="flex justify-between items-center mt-3">
      <span className="text-sm text-white/90">
        Posting as: <span className="font-semibold">{currentUser}</span>
      </span>
      <button
        onClick={onSubmit}
        disabled={!newComment.trim()}
        className="px-6 py-2 bg-teal-600 font-semibold text-white rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Post Comment
      </button>
    </div>
  </div>
);

export default AddCommentForm;
