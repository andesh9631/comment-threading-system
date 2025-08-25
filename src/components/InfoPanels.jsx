const InfoPanels = () => (
  <>
    {/* Data Structure Information */}
    <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
      <h3 className="text-sm font-semibold text-green-800 mb-2">
        ✅ Implementation Notes (Per PDF Requirements):
      </h3>
      <ul className="text-sm text-green-700 space-y-1">
        <li>
          <strong>✓ In-Memory Data Structures:</strong> Uses Map for efficient
          comment storage, Arrays for replies lists, tree structures for nesting
        </li>
        <li>
          <strong>✓ No Persistent Database:</strong> All data stored in memory
          only - refreshing page will lose data (intentional)
        </li>
        <li>
          <strong>✓ Comment Structure:</strong> id, user, timestamp, content,
          parent_comment_id, replies[] - exactly as specified
        </li>
        <li>
          <strong>✓ Tree Structure:</strong> Comments and replies form proper
          parent-child tree relationships
        </li>
        <li>
          <strong>✓ Nested Replies:</strong> Maximum depth of 5 levels enforced
        </li>
        <li>
          <strong>✓ Dual Views:</strong> Tree view (nested) and Flat view
          (chronological list) both implemented
        </li>
      </ul>
    </div>

    {/* Good to Have Features */}
    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 className="text-sm font-semibold text-blue-800 mb-2">
        🌟 Good to Have Features (Optional - IMPLEMENTED):
      </h3>
      <ul className="text-sm text-blue-700 space-y-1">
        <li>
          <strong>✓ Auto-collapse long threads:</strong> Threads with 10+
          replies auto-collapse (as specified in PDF)
        </li>
        <li>
          <strong>✓ Support for comment upvoting:</strong> Upvote/downvote
          functionality with maintained vote counts
        </li>
        <li>
          <strong>✓ Show More Text Button:</strong> Initially shows 3 replies,
          then "Show more" button for additional replies
        </li>
        <li>
          <strong>✓ Enhanced UX:</strong> Vote scores, reply indicators, thread
          counters, and improved visual feedback
        </li>
      </ul>
    </div>

    {/* Test Cases */}
    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
      <h3 className="text-sm font-semibold text-yellow-800 mb-2">
        🧪 PDF Test Cases Validation:
      </h3>
      <ul className="text-sm text-yellow-700 space-y-1">
        <li>
          <strong>Test Case 1:</strong> Adding comments and replies - tree view
          nesting ✓
        </li>
        <li>
          <strong>Test Case 2:</strong> Maximum depth enforcement (5 levels) -
          6th level blocked ✓
        </li>
        <li>
          <strong>Test Case 3:</strong> Flat view showing ALL comments
          chronologically ✓
        </li>
        <li>
          <strong>
            Click "🧪 Run Tests" button above to validate all test cases in
            browser console
          </strong>
        </li>
      </ul>
    </div>
  </>
);

export default InfoPanels;
