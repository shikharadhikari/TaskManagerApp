# 🚀 TaskManagerApp

A full-stack Task Manager application built with **Node.js, Express.js, and MongoDB**, allowing users to create, view, update, and delete tasks with ease.

---

## 📌 Overview

TaskManagerApp is a simple web application that helps users manage daily tasks using a backend API connected to a MongoDB database and a frontend interface for interaction.

---

## ✨ Features

- 📝 Create new tasks  
- 📋 View all tasks  
- ✏️ Edit/update tasks  
- 🗑️ Delete tasks  
- 🚀 MongoDB integration  
- 🔌 RESTful API

---

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Frontend**
- HTML
- CSS
- JavaScript

---

## 📁 Project Structure

```
TaskManagerApp/
├── backend/              # Server and API logic
├── frontend/             # Frontend UI files
├── .gitignore
├── README.MD
└── package-lock.json
```

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/shikharadhikari/TaskManagerApp.git
cd TaskManagerApp
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file with the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm start
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm start
```

Visit:
```
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description         |
|--------|--------------------|---------------------|
| GET    | /api/tasks         | Get all tasks       |
| GET    | /api/tasks/:id     | Get task by ID      |
| POST   | /api/tasks         | Create new task     |
| PUT    | /api/tasks/:id     | Update a task       |
| DELETE | /api/tasks/:id     | Delete a task       |

---

## 🧑‍💻 Usage

1. Launch backend and frontend servers  
2. Open the app in your browser  
3. Add, update, or remove tasks

---

## 🤝 Contributing

Want to improve this project?  
1. Fork the repo  
2. Create a new branch  
3. Commit your changes  
4. Open a pull request

---

## 📄 License

This project is open-source and available under the MIT License.

---

⭐ If you find this project helpful, please give it a star!
