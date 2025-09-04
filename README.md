# Fullstack React + Node.js App

This is a fullstack project with a React frontend and a Node.js backend. The project is structured with separate `frontend` and `backend` folders.

---

## 📁 Project Structure

```
my-fullstack-app/
├── frontend/   → React frontend (Vite or CRA)
├── backend/    → Node.js backend (Express)
├── README.md
```

---

## 🚀 Getting Started

### 🔧 Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Create a `.env` file in the `backend` folder and add the following:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

---

### 🎨 Frontend Setup

1. Open a new terminal and navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Create a `.env` file in the `frontend` folder and add the following:

   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

4. Start the frontend development server:

   ```bash
   npm run dev
   ```

---

## 📌 Notes

- Make sure MongoDB is running locally or provide a valid cloud connection string.
- The frontend and backend should run in **separate terminals**.
- You can use tools like **Postman** to test the backend APIs.
- If using Vite, the frontend will run on [http://localhost:5173](http://localhost:5173) by default.

---

## 🧪 Tech Stack

- **Frontend**: React, Vite/CRA, Tailwind CSS (optional)
- **Backend**: Node.js, Express, MongoDB, JWT
- **Other**: dotenv, axios, cors, nodemon

---

