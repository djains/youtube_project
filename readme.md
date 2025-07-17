
# 🎬 YouTube Clone (MERN Stack)

This project is a basic YouTube Clone built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Vite for fast frontend development. It includes features like user authentication, video upload, video playback, comments, and profile viewing.

---

## 📁 Project Structure

```
/YouTube-Clone
├── /youtube            # Backend (Node.js + Express + MongoDB)
└── /vite-project       # Frontend (React + Vite)
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/djains/youtube_project.git
cd YouTube-Clone
```

### 2. Install backend dependencies

```bash
cd youtube
npm install
```

### 3. Install frontend dependencies

```bash
cd ../vite-project
npm install
```

---

## 🚀 Running the Project

### 1. Start the backend server

Make sure MongoDB is running and connected.

```bash
cd youtube
npm start
```

### 2. Start the frontend app (Vite)

```bash
cd ../vite-project
npm run dev
```

---

## 🌐 CORS Configuration

CORS is enabled in the backend using:


```

✅ CORS error was automatically resolved after ensuring:
- Correct `origin` and `credentials` in both backend and frontend
- Both servers restarted after changes
- No `*` wildcard when using `credentials: true`

---

## ✅ Features

- 🔐 Signup/Login with JWT Auth
- 🎥 Upload and Watch Videos
- 👤 User Profile Pages
- 💬 Comment Section
- 🍪 Cookie-based session management
- 📦 Axios for API requests
- 🌐 Vite + React Router for client-side routing

---

## 🧠 Technologies Used

- **Frontend**: React.js, Vite, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, CORS, Cookie-Parser
- **Other**: React Router, Toast Notifications

---



---

## 📌 Notes

- Always start the **backend first**, then the **frontend**.
- Make sure MongoDB is running (`conn.js` should connect properly).
- If CORS issues return, double-check headers and restart both servers.

---
