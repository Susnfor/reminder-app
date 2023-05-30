// import logo from "./logo.svg";
import "../styles/App.css";
import Welcome from "../components/Welcome";
import Checkbox from "../components/Checkbox";
import Overview from "../components/Overview";
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

//Overview Code Section
  let checkedList = [] //total number of items
  let [checkedTotal, setCheckedTotal] = useState(0) //total number of items
      const handleCallback = (childData, checked) => {
        if (checked === true){ // if the item is checked, add the corresponding data/task to the list, then divide by 2 to get the total number of items
          checkedList.push(childData)
          setCheckedTotal (checkedList.length/2)
        }
        else {
          checkedList = checkedList.filter((item) => item !== childData) //if the item is unchecked, remove it from the list, then divide by 2 to get the total number of items
          setCheckedTotal (checkedList.length/2)

        }
      }


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
            <Link to='/'><button style={{marginTop: '10px', padding: '10px', borderRadius: '15px'}}>change/set name</button></Link>
            <Welcome name={user} />
            <Overview listTotal = {list.length} listChecked = {checkedTotal}//shows % of box ticked
            />
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
                  <button style={{marginLeft: "10px"}} onClick={() => addTodo(input)}>Add</button>
                  <button style={{marginLeft: "10px",  backgroundColor: "red"}} onClick={() => clearTodo()}>Clear All</button>
                </div>

                {/* basically maps out every item in the list, including newly added todo */}
                {
                list.map((item) => 
                (
                <Checkbox 
                parentCallback={handleCallback}
                key={item.id} 
                task={item.todo} 
                function={() => deleteTodo(item.id)} 
                //pass it as a arrow function or it automatically runs function
                /> 
              
                ))
                }


                
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Main;
