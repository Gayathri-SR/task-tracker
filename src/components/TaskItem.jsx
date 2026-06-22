function TaskItem({task, toggleTask, deleteTask}) {
    return(
        <div>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <div style={{
                textDecoration: task.completed? "line-through" : "none"
            }}>
                {task.title}
            </div>
            <button onClick={()=>deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;