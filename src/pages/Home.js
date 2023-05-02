import "../styles/App.css"
import "../styles/Home.css"
import Welcome from "../components/Welcome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


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
        <motion.div 
        className="Home-main"
        initial={{scaleX: 0}}
        animate={{scaleX: 1}}
        transition={{duration:0.2}}
        exit={{scaleX: 0}}
        >
        <div className="Home-bg">
            <Welcome />
            <div className="Home-user">
            <input placeholder="What shall we call you?"
            onChange={(e) => setUser(e.target.value)}  //changes it while typing instead of when press button
            ></input>
            
            <Link to="/reminder-app/main">
            <button >Enter</button>
            </Link>
            </div>
        </div>
        </motion.div>
    );
}

export default Home;
