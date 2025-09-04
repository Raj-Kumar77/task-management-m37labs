# Fullstack React + Node.js App

This is a fullstack project with a React frontend and a Node.js backend. The project is structured with separate `frontend` and `backend` folders.

---

## 📁 Project Structure

my-fullstack-app/
├── frontend/          # React Frontend (e.g., Vite, CRA, etc.)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/          # Backend (e.g., Express, MongoDB etc.)
│   ├── src/
│   └── package.json


## Backend folder setting
-- Run 'npm i' command to install node modules folder
-- Make a .env file and provide the necessary details as mentioned below
      PORT=5000
      MONGODB_URI=
      JWT_SECRET=
      JWT_EXPIRE=7d
      NODE_ENV=development
-- Run 'npm run dev' command to run the backend

## Frontend folder setting
-- Run 'npm i' command to install node modules folder
-- Make a .env file and provide the necessary details as mentioned below
      VITE_BACKEND_URL = http://localhost:5000
-- Run 'npm run dev' command to run the frontend
