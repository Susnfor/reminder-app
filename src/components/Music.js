import React from 'react';
import sound from '../assets/forest.mp3';


function Music() {

    const audio = new Audio(sound);


        
    return (
        <div className="Music">
            <button onClick={() => {audio.loop = true; audio.play();}}>Play</button>
            <button onClick={() => {audio.loop = false; audio.pause();}}>Pause</button>
            <div style={{margin: "10px"}}></div>

        
        </div>
    );
}

export default Music;
