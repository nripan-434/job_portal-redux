# Job Portal 

## 📌 Overview
Job Portal Redux is a full-stack MERN job portal application that connects job seekers, recruiters, and administrators on a single platform.
The application uses JWT-based authentication, Redux Toolkit for state management, and role-based route protection on both frontend and backend to ensure secure access and proper authorization.

## 🧱 Tech Stack

### Frontend
- React 19
- Redux Toolkit
- React Router DOM v7
- Axios
- Tailwind CSS
- Framer Motion
- React Hot Toast

### Backend
- Node.js
- Express.js v5
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- CORS

## 🏗️ System Architecture
React Client (Redux Toolkit)
        |
        | Authorization: Bearer <JWT>
        |
Express Server (REST APIs)
        |
        | Mongoose ODM
        |
MongoDB Database

## 📂 Project Structure

### Backend
backend/
 ├─ routes/
 │   ├─ userRoutes.js
 │   ├─ jobRoutes.js
 │   └─ ApplicationRoutes.js
 ├─ middleware/
 │   └─ auth.js        // JWT verification middleware
 ├─ db.js              // MongoDB connection
 └─ server.js          // Express entry point

### Frontend
frontend/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Footer.jsx
 │   ├─ Userprotected.jsx
 │   └─ Jobproviderprotected.jsx
 ├─ pages/
 │   ├─ user/
 │   ├─ employer/
 │   └─ admin/
 ├─ redux/
 ├─ App.jsx
 └─ main.jsx

## 🔐 Authentication & Authorization

### Authentication Type
JWT-based token authentication

### Correct Term
JWT authentication using authorization middleware

### Flow
- User logs in successfully
- Backend generates a JWT
- Token sent in request headers:
  Authorization: Bearer <token>
- verifytoken middleware validates the token
- If valid, req.user is populated and request continues
- If invalid or missing → 401 Unauthorized

## 👥 Role-Based Access Control

### Job Seeker
- Register / Login
- View job listings
- Apply to jobs
- View applications
- Reapply for jobs
- Bookmark jobs

### Recruiter (Job Provider)
- Register / Login
- Post jobs
- View posted jobs
- View applicants per job

### Admin
- Access admin dashboard
- Platform-level management

### Frontend Route Protection
- Userprotected
- Jobproviderprotected

## 🌐 Frontend Routes
- / → Public
- /register → Public
- /login → Public
- /home → Job Seeker (Protected)
- /employer → Recruiter (Protected)
- /admin → Admin
- /jobregister → Recruiter
- /application/:jobid → Job Seeker
- /applicants/:jobid → Recruiter
- /userapplications → Job Seeker
- /bookmarks → Job Seeker

## 🔌 Backend API Routes
- /users/*
- /job/*
- /application/*
(All protected routes require a valid JWT token)

## ⚙️ Environment Variables

Backend (.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret

## 🚀 Installation & Running Locally

git clone https://github.com/nripan-434/job_portal-redux.git

Backend:
cd backend
npm install
npm start

Frontend:
cd frontend
npm install
npm run dev

## 🧪 Testing & Debugging
- API tested using Postman
- Redux state via Redux DevTools
- Token validation via protected routes
- Error handling using HTTP status codes

## 📈 Design & Best Practices
- RESTful API design
- Centralized JWT verification
- Role-based routing
- Redux Toolkit for predictable state
- Modular and scalable folder structure

## 🔮 Future Enhancements
- Refresh token support
- Pagination and search filters
- Admin analytics
- Unit and integration tests
- Dockerization
- CI/CD pipeline

## 👤 Author
Nripan U  
Full Stack MERN Developer  
GitHub: https://github.com/nripan-434
