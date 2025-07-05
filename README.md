# React Todo App

A simple and intuitive todo application built with React. Manage your daily tasks with ease - create, edit, complete, and delete tasks with a clean and responsive interface.

## ✨ Features

- **Create Tasks**: Add new tasks with title and optional description
- **Mark Complete**: Check off completed tasks with visual feedback
- **Edit Tasks**: Inline editing functionality to modify existing tasks
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Empty State**: Friendly message when no tasks are present


## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **npm**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:jayant880/todoApp.git
   cd todoApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the app in action!

## 🏗️ Project Structure

```
src/
├── components/
│   ├── CreateTask.js      # Component for creating new tasks
│   ├── ViewTasks.js       # Component for displaying task list
│   └── TaskCard.js        # Individual task item component
├── styles/
│   ├── CreateTask.css     # Styles for task creation form
│   ├── ViewTask.css       # Styles for task list view
│   └── TaskCard.css       # Styles for individual task cards
├── utils/
│   └── storage.js         # Operation realated to local storage
├── App.js                 # Main application component
└── index.js               # Application entry point
```

## 🎯 How to Use

1. **Add a Task**: Enter your task title and optional description, then click "Save"
2. **Mark Complete**: Click the checkbox next to any task to mark it as completed
3. **Edit a Task**: Click the edit icon (pencil) to modify the task inline
4. **Delete a Task**: Click the delete icon (trash) and confirm to remove a task

## 🔧 Built With

- **React** - Frontend framework
- **React Hooks** - State management (useState)
- **CSS3** - Styling and animations
- **Font Awesome** - Icons

## 🚧 Future Enhancements

- [X] Due dates
- [ ] Task priority levels
- [ ] Search and filter functionality
