function TaskItem({task}) {
    return(
        <div>
            <input type="checkbox" checked={task.completed} />
            <div>
                {task.title}
            </div>
        </div>
    );
}

export default TaskItem;