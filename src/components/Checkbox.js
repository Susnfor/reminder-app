import React, { useState } from "react";
import "../styles/Checkbox.css";


function Checkbox(props) {
    // const [list, setList] = useState([" "])
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
    setChecked(!checked);
    };




    return (
        <div className="Checkbox">
        <header className="Checkbox-task">
            <label>
            <input type="checkbox"
            checked={checked}
            onChange={handleChange} />
            {props.parentCallback(props.task, checked)}
            {props.task}
            </label>
            <button //the delete button
             onClick={props.function}>&times;</button>
        </header>
        </div>
    );
}

export default Checkbox;
