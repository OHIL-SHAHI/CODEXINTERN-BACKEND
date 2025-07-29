# CodexIntern Backend Projects

This repository contains two separate backend projects built using Node.js, Express, and MongoDB:

- ✅ `todo-backend/`: A task management API
- 📚 `book-catalog-backend/`: A book catalog management API

---

## 📂 Project Structure

```
CODEXINTERN-BACKEND/
├── todo-backend/
└── book-catalog-backend/
```

---

## ✅ Todo Backend

A simple backend API to manage a list of tasks/todos.

### Features

- Create, update, delete todos
- Mark todos as completed
- Optional: JWT-based user authentication

### Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)

### API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | /api/todos       | Create a new todo         |
| GET    | /api/todos       | Get all todos             |
| PUT    | /api/todos/:id   | Update a specific todo    |
| DELETE | /api/todos/:id   | Delete a specific todo    |
| PUT    | /api/todos/:id/complete | Mark todo as completed |

---

## 📚 Book Catalog Backend

A backend API to manage a library's book inventory.

### Features

- CRUD operations for books
- Search books by title or author

### Book Attributes

- `title`
- `author`
- `genre`
- `publicationYear`
- `availability`

### Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)

### API Endpoints

| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| POST   | /api/books       | Add a new book                    |
| GET    | /api/books       | Get all books or search           |
| GET    | /api/books/:id   | Get a single book by ID           |
| PUT    | /api/books/:id   | Update a book by ID               |
| DELETE | /api/books/:id   | Delete a book by ID               |

---

## 🚀 How to Run

1. Clone the repo
2. Go to either subfolder
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add a `.env` file with:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/yourdbname
   ```
5. Start the server:
   ```bash
   npm start
   ```

---

## 📂 .gitignore

Both projects include `.gitignore` files to exclude:

```
node_modules/
.env
```

---

## ✅ Status

- [x] Todo Backend Completed
- [x] Book Catalog Backend Completed
