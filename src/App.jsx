import tasks from "./data/tasks";
import {useState} from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks,setTask] = useState(tasksData);

  return (
    <>
      <h1>Task Tracker</h1>
      <TaskList tasks={tasks} />
      <TaskInput />
    </>
  );
}

export default App;