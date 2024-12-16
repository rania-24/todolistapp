import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, editTask }) {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    useEffect(() => {
        if (editTask) {
            setTaskName(editTask.name);
            setTaskDescription(editTask.description);
        } else {
            setTaskName('');
            setTaskDescription('');
        }
    }, [editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !taskDescription) {
            alert('Both fields are required.');
            return;
        }

        if (editTask) {
            updateTask({ ...editTask, name: taskName, description: taskDescription });
        } else {
            addTask({ name: taskName, description: taskDescription });
        }

        setTaskName('');
        setTaskDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
            <button type="submit">{editTask ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
}

export default TaskForm;