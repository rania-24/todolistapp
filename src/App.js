import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);

    // Load tasks from localStorage on initial render
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
        setEditTask(null);
    };

    const deleteTask = (taskId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter(task => task.id !== taskId));
        }
    };

    const toggleCompletion = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editTask={editTask}
            />
            <TaskList
                tasks={tasks}
                setEditTask={setEditTask}
                deleteTask={deleteTask}
                toggleCompletion={toggleCompletion}
            />
        </div>
    );
}

export default App;