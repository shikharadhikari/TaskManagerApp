TaskManagerApp 🚀

A full-stack Task Manager application with MongoDB integration, built to help users create, view, update, and manage tasks efficiently across a backend API and frontend UI.

🔍 Overview

TaskManagerApp is a web application designed to let users manage their daily tasks — supporting core CRUD operations (Create, Read, Update, Delete) for tasks in a user-friendly interface. The backend API interacts with a MongoDB database, and the frontend provides an intuitive task management experience.

📦 Features

✨ Create new tasks and save them to the database
📋 View all existing tasks in a list view
✏️ Update or edit task details
🗑️ Delete tasks
🔐 Fully functional backend with RESTful API support
🌐 Full stack architecture (frontend + backend)

🧠 Technologies Used
Backend

Node.js — JavaScript runtime

Express.js — Backend framework

MongoDB — Database for storing tasks

Mongoose — ODM for MongoDB

Frontend

JavaScript / HTML / CSS — User interface

(If using a specific framework like React, Angular, etc., list it here)

📁 Repository Structure
TaskManagerApp/
├── backend/        # API and server logic
├── frontend/       # UI / client code
├── .gitignore
├── README.md
└── package-lock.json

🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js (v14 or higher)

npm (comes with Node.js)

MongoDB (local or cloud instance like Atlas)

🛠️ Installation

Clone the repository

git clone https://github.com/shikharadhikari/TaskManagerApp.git
cd TaskManagerApp

Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Configure environment variables:

Create a .env file with:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start the backend server:

npm start

Frontend Setup

Open a new terminal and navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the frontend development server:

npm start


Now open your browser at:

http://localhost:3000

📌 API Endpoints

Examples — update based on your actual routes

Method	Endpoint	Description
GET	/api/tasks	List all tasks
POST	/api/tasks	Create a new task
GET	/api/tasks/:id	Get a task by ID
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task
🛠 Usage

Open the app in browser after starting both servers.

Add a new task via the form.

See your task listed instantly.

Edit or delete any task as needed.