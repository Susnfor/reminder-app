import React, { useState } from "react";



function Prompt() {
    const [list, setList] = useState([" "]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
          id: Math.random(),
          todo: todo,
        };
    
        // add the todo to the list
        setList([...list, newTodo]);
    
        // clear input box
        setInput("");
      };


    return (
        <div className="Prompt-container">
            <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ></input>
            <button onClick={()=> addTodo(input)}>Add</button>
        
        </div>
    );
}

export default Prompt;
