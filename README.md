# 📚 Contact Book with Authorization — React + Redux Toolkit + JWT

This project is an advanced contact manager application built as **extra practice** for working with users, authentication, and asynchronous requests. It demonstrates a real-world workflow using **React**, **Redux Toolkit**, **JWT authentication**, and **REST API**.

https://extra-practice-contact-book.vercel.app/

//-----------------------------------------------------------------//

## 🚀 Quick Start

```bash
# Create a new Vite + React project
npm create vite@latest . -- --template react

# Install all default dependencies
npm install

# Install required project libraries
npm install react-redux @reduxjs/toolkit axios redux-persist react-router-dom react-hot-toast formik yup

# Start the development server
npm run dev
📦 Project Setup with Git
bash
Copy
Edit
git add .
git commit -m "Initialize Vite React project"
git push origin main

//-----------------------------------------------------------------//

🔐 Backend API

We use the GoIT Connections API which supports:

User registration POST /users/signup

Login POST /users/login

Logout POST /users/logout

Get current user GET /users/current

Manage private contacts collection GET /contacts, POST, DELETE, PATCH

//-----------------------------------------------------------------//

🧱 Tech Stack

⚛️ React — UI rendering

🧰 Redux Toolkit — state management

🔐 redux-persist — persistent auth token

📡 axios — HTTP requests

📍 react-router-dom — routing

🔥 react-hot-toast — notifications

📋 Formik + Yup — form validation

🎨 CSS Modules — local component styling

⚡ Vite — fast development environment

//-----------------------------------------------------------------//

📁 Project Structure

bash
Copy
Edit
src/
├── components/        # Reusable components (Form, List, AppBar, etc.)
├── pages/             # Route pages: Login, Register, Contacts, Home
├── redux/             # State slices: auth, contacts, filters
│   ├── auth/
│   ├── contacts/
│   ├── filters/
├── routes/            # PrivateRoute & RestrictedRoute
├── App.jsx            # Main App component with routing
└── main.jsx           # App entry point with providers

//-----------------------------------------------------------------//

✨ Features

🔐 User Registration / Login / Logout

💾 Private contact book per user

📜 Token persistence across sessions

🔄 Refreshing user from token on page reload

➕ Add, delete, and filter contacts

✅ Form validation with Formik + Yup

🔥 Success & error notifications via React Hot Toast

🚫 Restricted and protected routes

💅 Styled with CSS Modules


//-----------------------------------------------------------------//

🛠 Scripts
bash
Copy
Edit
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview built app locally

//-----------------------------------------------------------------//

🧪 Optional Enhancements

 Confirm deletion via modal

 Edit contact via PATCH

 Sort/filter contacts by more fields

 Add avatar or email to contacts

 Dark mode toggle