import "../styles/App.css"
import Welcome from "../components/Welcome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Home() {
    const [user, setUser] = useState(""); //create variable state for user
    
    useEffect(()=>{ //run after first render
        const data = localStorage.getItem("username"); //get the data, but its still a string
        if (data){
          setUser(JSON.parse(data)); //set the username from the localstorage to the current username
        }
      }, [])
      
      
      useEffect(()=>{
        if(user.length>= 1){ //only saves when not blank
        localStorage.setItem("username", JSON.stringify(user)); 
        }//saves username to local storage
      },[user])




    return (
        <div className="Home-main">
        <div className="App-main">
            <Welcome />
            <div className="Home-user">
            <input placeholder="What shall we call you?"
            onChange={(e) => setUser(e.target.value)}  //changes it while typing instead of when press button
            ></input>
            
            <Link to="/main">
            <button >Enter</button>
            </Link>
            </div>
        </div>
        </div>
    );
}

export default Home;
