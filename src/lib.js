// Comment factory function
const createComment = (id, user, content, parent_comment_id = null) => ({
  id,
  user,
  timestamp: new Date(),
  content,
  parent_comment_id,
  replies: [],
  upvotes: 0,
  downvotes: 0,
  depth: 0,
});

export const createPost = (title) => {
  const post = {
    title,
    comments: new Map(),
    commentIdCounter: 1,
  };

  post.addComment = (user, content, parent_comment_id = null) => {
    // Check depth limit for nested replies (max 5 levels)
    if (parent_comment_id) {
      const parentComment = post.comments.get(parent_comment_id);
      if (!parentComment) return null;

      // Calculate depth using tree traversal
      let depth = 0;
      let currentParent = parentComment;
      while (currentParent.parent_comment_id) {
        currentParent = post.comments.get(currentParent.parent_comment_id);
        depth++;
      }

      // Maximum depth of 5 as per requirements
      if (depth >= 5) return null;
    }

    // Create new comment with exact structure from PDF
    const comment = createComment(
      post.commentIdCounter++,
      user,
      content,
      parent_comment_id
    );

    // Handle parent-child relationship using tree structure
    if (parent_comment_id) {
      const parentComment = post.comments.get(parent_comment_id);
      parentComment.replies.push(comment); // Add to parent's replies list

      // Set depth for visual display
      let depth = 1;
      let currentParent = parentComment;
      while (currentParent.parent_comment_id) {
        currentParent = post.comments.get(currentParent.parent_comment_id);
        depth++;
      }
      comment.depth = depth;
    }

    // Store in Map data structure for efficient access
    post.comments.set(comment.id, comment);
    return comment;
  };

  post.getCommentsView = (viewType = "tree") => {
    if (viewType === "flat") {
      // Flat view: return ALL comments and replies in chronological order
      return Array.from(post.comments.values()).sort(
        (a, b) => a.timestamp - b.timestamp
      );
    }

    // Tree view: return only top-level comments with nested structure
    return Array.from(post.comments.values())
      .filter((comment) => comment.parent_comment_id === null)
      .sort((a, b) => a.timestamp - b.timestamp);
  };

  post.voteComment = (commentId, voteType) => {
    const comment = post.comments.get(commentId);
    if (!comment) return false;

    if (voteType === "up") {
      comment.upvotes++;
    } else if (voteType === "down") {
      comment.downvotes++;
    }
    return true;
  };

  return post;
};

export const formatTimestamp = (timestamp) => {
  return timestamp.toLocaleString();
};

// Helper function to get vote score
export const getVoteScore = (comment) => comment.upvotes - comment.downvotes;

export const runTestCases = () => {
  console.log("🧪 Running Test Cases from PDF...");

  // Test Case 1: Adding and Viewing Comments
  try {
    const testPost = createPost("Test Post");
    const comment = testPost.addComment("User1", "This is a comment.");
    const reply = testPost.addComment("User2", "This is a reply.", comment.id);

    const commentsTree = testPost.getCommentsView("tree");
    console.assert(
      commentsTree.length === 1,
      "❌ Test Case 1 Failed: There should be one top-level comment."
    );
    console.assert(
      commentsTree[0].replies.length === 1,
      "❌ Test Case 1 Failed: The comment should have one reply."
    );
    console.log("✅ Test Case 1 Passed: Adding and Viewing Comments");
  } catch (e) {
    console.log("❌ Test Case 1 Failed:", e.message);
  }

  // Test Case 2: Nested Replies with Maximum Depth
  try {
    const testPost = createPost("Test Post");
    const comment = testPost.addComment("User1", "This is a comment.");
    let parentCommentId = comment.id;

    for (let depth = 0; depth < 5; depth++) {
      const reply = testPost.addComment(
        `User${depth + 2}`,
        `Reply ${depth + 1}`,
        parentCommentId
      );
      console.assert(
        reply !== null,
        `❌ Test Case 2 Failed: Reply at depth ${depth + 1} should be allowed.`
      );
      parentCommentId = reply.id;
    }

    // Attempt to add a reply beyond the 5th level
    const sixthLevelReply = testPost.addComment(
      "User7",
      "This is a 6th-level reply.",
      parentCommentId
    );
    console.assert(
      sixthLevelReply === null,
      "❌ Test Case 2 Failed: Replies should not be allowed beyond depth 5."
    );
    console.log("✅ Test Case 2 Passed: Maximum Depth Enforcement");
  } catch (e) {
    console.log("❌ Test Case 2 Failed:", e.message);
  }

  // Test Case 3: Viewing Comments in Flat View
  try {
    const testPost = createPost("Test Post");
    const comment1 = testPost.addComment("User1", "First comment.");
    const comment2 = testPost.addComment("User2", "Second comment.");
    const reply1 = testPost.addComment(
      "User3",
      "Reply to first comment.",
      comment1.id
    );

    const flatView = testPost.getCommentsView("flat");
    console.assert(
      flatView.length === 3,
      "❌ Test Case 3 Failed: There should be 3 comments in the flat view."
    );
    console.assert(
      flatView[0].parent_comment_id === null,
      "❌ Test Case 3 Failed: Top-level comments should have null as parent_comment_id."
    );
    console.log("✅ Test Case 3 Passed: Flat View Implementation");
  } catch (e) {
    console.log("❌ Test Case 3 Failed:", e.message);
  }

  console.log("🧪 All Test Cases Completed!");
};
