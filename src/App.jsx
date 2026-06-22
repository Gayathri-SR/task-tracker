import tasksData from "./data/tasks";
import {useState} from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks,setTasks] = useState(tasksData);

  function toggleTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function addTask(title) {
    if (!title.trim()) {
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title: title,
      completed: false
    };

    setTasks([
      ...tasks,
      newTask
    ]);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter(
      task => task.id != id
    );

    setTasks(updatedTasks);
  }

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <>
      <h1>Task Tracker</h1>
      <h2>Completed : {completedCount}/{tasks.length}</h2>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <button onClick={() => setTasks([])}>Clear Tasks</button>
      <TaskInput addTask={addTask} />
    </>
  );
}

export default App;