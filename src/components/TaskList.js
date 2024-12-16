import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setEditTask, deleteTask, toggleCompletion }) {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    setEditTask={setEditTask}
                    deleteTask={deleteTask}
                    toggleCompletion={toggleCompletion}
                />
            ))}
        </div>
    );
}

export default TaskList;