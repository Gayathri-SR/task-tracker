import {useState} from 'react';

function TaskInput({addTask}) {
    const [inputValue,setInputValue] = useState("");

    return(
        <div>
            <input type="text" placeholder="Add a task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {
                addTask(inputValue);
                setInputValue("");
            }}>Add</button>
        </div>
    );
}

export default TaskInput;