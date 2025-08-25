const ReplyForm = ({
  replyText,
  setReplyText,
  onSubmit,
  onCancel,
  parentUser,
}) => (
  <div className="mt-4 p-3 bg-white/20 rounded">
    <textarea
      value={replyText}
      onChange={(e) => setReplyText(e.target.value)}
      placeholder={`Replying to ${parentUser}...`}
      className="w-full bg-white/40 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none placeholder:text-white/70"
      rows="3"
    />
    <div className="flex space-x-2 mt-2">
      <button
        onClick={onSubmit}
        className="px-4 py-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 disabled:bg-gray-400 transition-colors"
        disabled={!replyText.trim()}
      >
        Post Reply
      </button>
      <button
        onClick={onCancel}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-gray-400 transition-colors"
      >
        Cancel
      </button>
    </div>
  </div>
);

export default ReplyForm;
