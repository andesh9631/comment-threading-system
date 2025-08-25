import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { createPost, runTestCases } from "./lib";
import CommentThreadingSystem from "./components/CommentThreadingSystem";

const App = () => {
  const postRef = useRef(createPost("Sample Discussion Post"));
  const [updateCounter, setUpdateCounter] = useState(0);
  const [viewType, setViewType] = useState("tree");
  const [newComment, setNewComment] = useState("");
  const [currentUser, setCurrentUser] = useState("User1");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [collapsedThreads, setCollapsedThreads] = useState(new Set());
  const [expandedReplies, setExpandedReplies] = useState(new Set());

  const post = postRef.current;

  const forceUpdate = () => {
    setUpdateCounter((prev) => prev + 1);
  };

  const addComment = (content, parentId = null) => {
    if (!content.trim()) return;

    const comment = post.addComment(currentUser, content, parentId);

    if (comment) {
      forceUpdate();
    } else if (parentId) {
      alert("Maximum reply depth (5 levels) reached!");
    }

    setNewComment("");
    setReplyText("");
    setReplyingTo(null);
  };

  const handleVote = (commentId, voteType) => {
    post.voteComment(commentId, voteType);
    forceUpdate();
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
  };

  const handleCancelReply = () => {
    setReplyingTo(null);
    setReplyText("");
  };

  const handleSubmitReply = (parentId) => {
    console.log("Submitting reply to comment ID:", parentId);

    addComment(replyText, parentId);
  };

  const handleToggleCollapse = (commentId) => {
    const newCollapsed = new Set(collapsedThreads);
    if (newCollapsed.has(commentId)) {
      newCollapsed.delete(commentId);
    } else {
      newCollapsed.add(commentId);
    }
    setCollapsedThreads(newCollapsed);
  };

  const handleToggleExpandReplies = (commentId) => {
    const newExpanded = new Set(expandedReplies);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedReplies(newExpanded);
  };

  const comments = post.getCommentsView(viewType);

  return (
    <div className="min-h-screen relative">
      {/* Animated Background Layer - Fixed behind all content */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-800 -z-10">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"
            style={{ animationDuration: "3s", animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-32 right-20 w-20 h-20 bg-white/5 rounded-full animate-bounce"
            style={{ animationDuration: "3s", animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-bounce"
            style={{ animationDuration: "3s", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-32 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>

      {/* Content Layer - Always on top of background */}
      <div className="relative z-10">
        <Header />

        <CommentThreadingSystem
          post={post}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          viewType={viewType}
          setViewType={setViewType}
          onRunTests={runTestCases}
          newComment={newComment}
          setNewComment={setNewComment}
          addComment={addComment}
          comments={comments}
          replyingTo={replyingTo}
          replyText={replyText}
          setReplyText={setReplyText}
          collapsedThreads={collapsedThreads}
          expandedReplies={expandedReplies}
          handleVote={handleVote}
          handleReply={handleReply}
          handleCancelReply={handleCancelReply}
          handleSubmitReply={handleSubmitReply}
          onToggleCollapse={handleToggleCollapse}
          onToggleExpandReplies={handleToggleExpandReplies}
        />
      </div>
    </div>
  );
};

export default App;
