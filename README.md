# Todo App - Full Stack MERN Application

A full-stack todo application built with React, Node.js, Express, and MongoDB. The app features a beautiful UI and RESTful API endpoints that can be tested with Postman.

## Features

- 🔐 User authentication with signup and login
- 👤 User-specific todos (each user only sees their own todos)
- ✨ Beautiful and modern UI
- 📝 Create, read, update, and delete todos
- 📋 Each todo has a title (required) and description (optional)
- ✅ Mark todos as complete/incomplete
- 📊 Show 5 most recent todos with "Show More" option
- 🌐 RESTful API endpoints for Postman testing
- 💾 MongoDB database for persistent storage
- 🔒 JWT token-based authentication
- ⚡ Fast and responsive

## Tech Stack

**Frontend:**
- React 18
- Axios for API calls
- Modern CSS with gradients and animations

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled for frontend communication

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas connection string)
- npm or yarn

## Installation & Setup

### 1. Clone or navigate to the project directory

```bash
cd "d:\mern\New folder"
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure MongoDB and Environment Variables

Create a `.env` file in the `server` directory:

```env
MONGODB_URI=mongodb://localhost:27017/todoapp
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

Or use MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

**Important:** Change the `JWT_SECRET` to a random secure string in production!

### 4. Install Frontend Dependencies

```bash
cd ../client
npm install
```

## Running the Application

### Start the Backend Server

```bash
cd server
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### Start the Frontend

Open a new terminal window:

```bash
cd client
npm start
```

The frontend will open at `http://localhost:3000`

## API Endpoints (For Postman Testing)

Base URL: `http://localhost:5000/api/todos`

### Get All Todos
- **Method:** GET
- **Endpoint:** `/api/todos`
- **Headers:** `Authorization: Bearer {token}`
- **Description:** Get all todos for the authenticated user
- **Response:** Array of todos (only for the logged-in user)

### Get Single Todo
- **Method:** GET
- **Endpoint:** `/api/todos/:id`
- **Response:** Single todo object

### Create Todo
- **Method:** POST
- **Endpoint:** `/api/todos`
- **Headers:** `Authorization: Bearer {token}`
- **Body (JSON):**
  ```json
  {
    "title": "Your todo title",
    "description": "Optional description",
    "completed": false
  }
  ```
- **Response:** Created todo object
- **Note:** `title` is required, `description` and `completed` are optional

### Update Todo
- **Method:** PUT
- **Endpoint:** `/api/todos/:id`
- **Headers:** `Authorization: Bearer {token}`
- **Body (JSON):**
  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "completed": true
  }
  ```
- **Response:** Updated todo object
- **Note:** All fields are optional in update - only include fields you want to change. Todo must belong to the authenticated user.

### Delete Todo
- **Method:** DELETE
- **Endpoint:** `/api/todos/:id`
- **Headers:** `Authorization: Bearer {token}`
- **Response:** Success message
- **Note:** Todo must belong to the authenticated user

### Delete All Todos
- **Method:** DELETE
- **Endpoint:** `/api/todos`
- **Headers:** `Authorization: Bearer {token}`
- **Description:** Delete all todos for the authenticated user
- **Response:** Success message

## Example Postman Requests

### 1. Sign Up
```
POST http://localhost:5000/api/auth/signup
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```

### 2. Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```

### 3. Create a Todo (requires token from login)
```
POST http://localhost:5000/api/todos
Content-Type: application/json
Authorization: Bearer your_jwt_token_here

{
  "title": "Learn React",
  "description": "Complete React tutorial and build projects",
  "completed": false
}
```

### 4. Get All Todos (requires token)
```
GET http://localhost:5000/api/todos
Authorization: Bearer your_jwt_token_here
```

### 5. Update a Todo (requires token)
```
PUT http://localhost:5000/api/todos/{todo_id}
Content-Type: application/json
Authorization: Bearer your_jwt_token_here

{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}
```

### 6. Delete a Todo (requires token)
```
DELETE http://localhost:5000/api/todos/{todo_id}
Authorization: Bearer your_jwt_token_here
```

## Project Structure

```
.
├── server/
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── models/
│   │   └── Todo.js        # Todo schema
│   ├── routes/
│   │   └── todoRoutes.js  # API routes
│   ├── server.js          # Express server
│   └── package.json
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTodo.js
│   │   │   ├── TodoList.js
│   │   │   └── TodoItem.js
│   │   ├── services/
│   │   │   └── api.js     # API service functions
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Troubleshooting

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running locally, or
   - Check your MongoDB Atlas connection string in `.env`

2. **Port Already in Use:**
   - Change the PORT in server `.env` file
   - Update the API_URL in client `src/services/api.js` if needed

3. **CORS Errors:**
   - Ensure the backend server is running
   - Check that CORS is enabled in `server.js`

## License

ISC

