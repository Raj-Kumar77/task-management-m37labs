# Task Management Backend API

A comprehensive task management backend API built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- User registration and authentication with JWT
- Password hashing with bcrypt
- Task CRUD operations
- Task filtering by status and priority
- Protected routes with middleware
- Input validation and error handling
- RESTful API design

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Tasks

- `GET /api/tasks` - Get all tasks (protected)
- `GET /api/tasks/stats` - Get task statistics (protected)
- `GET /api/tasks/:id` - Get single task (protected)
- `POST /api/tasks` - Create new task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=5000
JWT_EXPIRE=7d
NODE_ENV=development
```

## Installation and Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make sure MongoDB is running on your system

3. Start the development server:
   ```bash
   npm run dev
   ```

