import React from 'react';

function TaskItem({ task, setEditTask, deleteTask, toggleCompletion }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <div className="task-actions">
                <button onClick={() => toggleCompletion(task.id)}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => setEditTask(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TaskItem;