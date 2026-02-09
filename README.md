🎯 Todo App — React

A clean, minimal todo app built with React as a portfolio practice project.
Features include: add/complete/delete tasks, All/Active/Completed tabs, localStorage persistence, Enter-to-submit, and a light/dark theme toggle with modern styling. Inspired by a YouTube video.

🚀 Live Demo

(Optional) Deploy with Vercel, Netlify, or GitHub Pages and paste the link here.

🧭 Quick Features

Add todos: press Enter or click the + button

Mark todos done: toggle completion

Delete todos

Filter tasks: All / Active / Completed

Persistent data in localStorage

Light / Dark theme toggle (persists across reloads)

Minimal, responsive UI with custom fonts

Keyboard-accessible input and buttons

⚡ How to Use

Start the app.

Type a task in the input and press Enter or click + to add it.

Use the tabs to filter tasks by status.

Click Done to mark a task as completed.

Click Delete to remove a task.

Toggle theme with the top-right button — theme persists across reloads.

📂 Project Structure (Key Files)
File	Purpose
App.jsx	Main state, handlers, theme logic
TodoInput.jsx	Input + Enter handling
TodoList.jsx	Todo list rendering + filtering
TodoCard.jsx	Individual todo row (Done/Delete)
Tabs.jsx	All / Active / Completed tabs
Header.jsx	Display header + active task count
index.css	Theme variables, layout, typography
🛠 Tech Stack

React (functional components + hooks)

JavaScript (ES6+)

CSS / Tailwind (responsive, dark mode)

Vite (dev server / build)

📝 What I Learned

Managing component state with useState

Persisting state to localStorage

Immutability patterns and avoiding direct object mutation

Handling keyboard events (Enter) and improving focus UX

Theming with Tailwind + CSS custom properties

Building a simple, responsive, accessible UI

⚙ Decisions & Notes

Todos are stored as objects in todos state and persisted as { todos: [...] } in localStorage.

The app currently falls back to default sample todos on first load. (You can change this behavior to start with an empty list if preferred.)

Keys / Identity: consider adding stable id properties to todos (timestamp/UUID) to avoid index-related bugs if you refactor lists.

🌟 Possible Future Improvements

Add stable IDs to each todo and refactor handlers to use them

Toggle completed/uncompleted dynamically

Add undo for deletes or a trash area

Include sorting, due dates, priorities, or tags

Add animations, transitions, or micro-interactions

Write unit tests (Jest + React Testing Library)

Improve accessibility (ARIA roles, better screen-reader announcements)

Optimize localStorage writes (debounce or batch updates for large lists)

♿ Accessibility

Inputs and buttons are keyboard-accessible

Add aria-label attributes where needed for better screen-reader support

🙏 Acknowledgements

Built as a learning / portfolio project, iterated with styling and UX improvements.

👨‍💻 Author

David — Frontend Developer in progress 🚀
Focused on building clean, interactive React apps
