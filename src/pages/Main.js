// import logo from "./logo.svg";
import "../styles/App.css";
import Welcome from "../components/Welcome";
import Checkbox from "../components/Checkbox";
// import Overview from "../components/Overview";
// import Prompt from "../components/Prompt";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Music from "../components/Music";
import { motion } from "framer-motion";

function Main() {
  const [list, setList] = useState([]); //to do items list
  const [input, setInput] = useState(""); //to add items using input value
  const [user, setUser] = useState(""); //to set username

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(), //add unique id to help remove it
      todo: todo,
    };
    // add the todo to the list
    setList([...list, newTodo]);
    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id); //use id to find item and remove it
    setList(newList);
  };

  const clearTodo = () => {
    // alert("hi")
    // Filter out todo with the id
    setList([]); //set todolist to blank
    localStorage.removeItem("todolist") //remove it from local storage
  };


  useEffect(()=>{ //run after first render
    const data = localStorage.getItem("username"); //get the data, but its still a string
    if (data){
      setUser(JSON.parse(data)); //set the parsed/translated/arrayed data to the todolist
    }
  }, [])

  useEffect(()=>{ //run after first render
    const data = localStorage.getItem("todolist"); //get the data, but its still a string
    if (data){
      setList(JSON.parse(data)); //set the parsed/translated/arrayed data to the todolist
    }
  }, [])
  
  
  useEffect(()=>{
    if(list.length>= 1){ //only set item when theres something in the array, or else on load it'll keep setting it to the empty array
    localStorage.setItem("todolist", JSON.stringify(list)); 
    }//saves todolist to local storage
  },[list])


  return (
    <motion.div 
    className="App-container"
        initial={{scaleX: 0}}
        animate={{scaleX: 1}}
        transition={{duration:0.2}}
        exit={{scaleX: 0}}
    >
      <div className="App-background">
        <div className="App-main">
          <div className="App-topbg">
            <Link to='/reminder-app'><button style={{marginTop: '10px'}}>change/set name</button></Link>
            <Welcome name={user} />
            {/* <Overview //shows % of box ticked
            /> */}
            <Music/>
          </div>

          <div className="App-bottombg">
            <div className="App-bottom">
              <div className="App-tasklist">
                <header>Tasks</header>


                { /* Input prompt box */}
                <div className="Prompt-container">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}>
                  </input>
                  <button onClick={() => addTodo(input)}>Add</button>
                  <button style={{marginLeft: "10px",  backgroundColor: "red"}} onClick={() => clearTodo()}>Clear All</button>
                </div>

                {/* basically maps out every item in the list, including newly added todo */}
                {list.map((item) => 
                (
                <Checkbox 
                key={item.id} 
                task={item.todo} 
                function={() => deleteTodo(item.id)} 
                //pass it as a arrow function or it automatically runs function
                /> 
                ))}


                
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Main;
