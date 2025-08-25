# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# comment-threading-system" 

# Comment Threading System

A fully‑featured comment threading system built with **React** that supports nested replies, voting, collapsible threads, and multiple view modes.

<p align="center">
  <img src="./.github/preview.png" alt="Comment Threading System Preview" width="800"/>
</p>

<p align="center">
  <a href="https://react.dev"><img alt="React" src="https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=000"></a>
  <a href="https://tailwindcss.com/"><img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-3+-38B2AC?logo=tailwindcss&logoColor=fff"></a>
  <img alt="Node" src="https://img.shields.io/badge/Node-18+-339933?logo=node.js&logoColor=fff">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
</p>

---

## ✨ Features

### Core Functionality

* **Nested Comments:** Support for up to **5 levels** of nested replies
* **Dual View Modes:** Switch between **Tree (nested)** and **Flat (chronological)** views
* **Voting System:** Upvote and downvote comments with live score tracking
* **User Management:** Switch between different users for testing
* **Real‑time Updates:** Instant UI updates when adding comments or voting

### Advanced Features

* **Collapsible Threads:** Auto‑collapse threads with **10+** replies for better readability
* **Show More/Less:** Display first **3** replies with expandable *show more* functionality
* **Reply Forms:** Inline reply forms with cancel functionality
* **Depth Limiting:** Automatic enforcement of maximum **5‑level** nesting
* **Responsive Design:** Beautiful UI with animated background and modern styling

---

## 🚀 Demo

* Add a screenshot or short clip at `./.github/preview.png` (or update the path above).

---

## 🛠️ Tech Stack

* **React** – Frontend framework
* **JavaScript (ES6+)** – Core language
* **Tailwind CSS** – Utility‑first CSS framework
* **Lucide React** – Icon library
* **CSS Animations** – Custom animations and transitions

---

## 📦 Installation

```bash
# 1) Clone the repository
git clone https://github.com/yourusername/comment-threading-system.git
cd comment-threading-system

# 2) Install dependencies
npm install

# 3) Start the development server (http://localhost:3000)
npm start
```

> **Note:** Ensure Node.js **18+** and npm are installed.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Header.jsx                    # App header component
│   ├── CommentThreadingSystem.jsx    # Main system container
│   ├── CommentsList.jsx              # Comments list wrapper
│   ├── CommentItem.jsx               # Individual comment component
│   ├── CommentHeader.jsx             # Comment metadata and controls
│   ├── CommentActions.jsx            # Vote and reply buttons
│   ├── ReplyForm.jsx                 # Inline reply form
│   ├── ShowMoreButton.jsx            # Expand/collapse replies button
│   ├── AddCommentForm.jsx            # Top-level comment form
│   ├── Controls.jsx                  # View controls and user switching
│   └── InfoPanels.jsx                # Information panels
├── lib/
│   └── index.js                      # Core comment system logic
├── App.js                            # Main application component
├── App.css                           # Global styles
└── index.js                          # Application entry point
```

---

## 🎯 Key Concepts & Components

### Core Logic (`lib/index.js`)

* `createPost(title)` – Factory function for creating post objects
* `createComment({ content, author, parentId })` – Factory for comment creation
* Efficient **Map**‑based storage for O(1) access by comment id
* Tree traversal utilities for **depth calculation** and **nesting limits**

### UI Components

* **`CommentItem`** – Recursive renderer for nested comments
* **`ReplyForm`** – Inline reply with local state & cancel
* **`CommentActions`** – Voting & reply controls (with permissions)
* **`Controls`** – User switching & view mode toggles

---

## 🔧 Usage

### Adding Comments

```js
// Add a top-level comment
addComment("This is a comment", null);

// Add a reply to a comment
addComment("This is a reply", parentCommentId);
```

### View Modes

* **Tree View:** Displays comments in nested hierarchy
* **Flat View:** Shows all comments chronologically with parent indicators

### Voting

```js
// Upvote a comment
handleVote(commentId, "up");

// Downvote a comment
handleVote(commentId, "down");
```

---

## 🧪 Testing

The system includes comprehensive test cases that validate:

* **Basic Functionality:** Adding and viewing comments
* **Depth Limiting:** Maximum 5‑level nesting enforcement
* **View Modes:** Proper flat view implementation

**How to run tests**

* Click the **“Run Test Cases”** button in the UI
* Check the **browser console** for test results

---

## 🎨 Customization

### Styling

* **Colors:** Update gradient background in `App.js`
* **Layout:** Modify spacing/sizing in component files
* **Animations:** Adjust CSS animations for floating elements

### Configuration Snippets

```js
// Maximum reply depth (in lib/index.js)
if (depth >= 5) return null;

// Initial visible replies (in CommentItem.jsx)
const INITIAL_REPLY_COUNT = 3;

// Auto-collapse threshold (in CommentItem.jsx)
const shouldShowCollapseButton = hasReplies && comment.replies.length >= 10;
```

---

## 🚦 Features in Detail

### Nested Threading

* Up to **5 levels** deep
* Visual indentation shows reply hierarchy
* Automatic depth calculation & enforcement

### View Modes

* **Tree View:** Hierarchical display with nested replies
* **Flat View:** Chronological list with reply indicators

### Smart UI

* Auto‑collapse threads with **10+** replies
* *Show more* for threads with **3+** replies
* Inline reply forms with proper focus management
* Real‑time vote score updates

---

## 🙏 Acknowledgments

* Built with React and modern web dev best practices
* Inspired by Reddit & Hacker News comment systems
* Uses Tailwind CSS for rapid UI development
* Icons provided by **Lucide React**

---
<p align="center">Made with ❤️ and lots of ☕</p>

