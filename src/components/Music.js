import React from 'react';
import sound from '../assets/forest.mp3';
import "../styles/Music.css"


function Music() {

    const audio = new Audio(sound);


        
    return (
        <div className="Music">
            <button className="Music-btn" onClick={() => {audio.loop = true; audio.play();}}>Play</button>
            <button className="Music-btn" onClick={() => {audio.loop = false; audio.pause();}}>Pause</button>
            <div style={{margin: "10px"}}></div>

        
        </div>
    );
}

export default Music;
