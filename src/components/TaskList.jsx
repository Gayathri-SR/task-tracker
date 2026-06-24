import TaskItem from "./TaskItem";

function TaskList({tasks, toggleTask, deleteTask}) {
    if (tasks.length === 0) {
        return <p>No tasks yet.</p>;
    }

    return(
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </div>
    );
}

export default TaskList;