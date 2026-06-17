function TaskItem({task, toggleTask}) {
    return(
        <div>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <div>
                {task.title}
            </div>
        </div>
    );
}

export default TaskItem;