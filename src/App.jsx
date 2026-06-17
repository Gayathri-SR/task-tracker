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

  return (
    <>
      <h1>Task Tracker</h1>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
      <button onClick={() => setTasks([])}>Clear Tasks</button>
      <TaskInput />
    </>
  );
}

export default App;