import React from "react";
import "../styles/Overview.css";


function Overview(props) {


    return (
        <div className="Overview">
        <header className="Overview-header">
            Overview
        </header>
        <p>You've completed: {props.listChecked} / {props.listTotal}</p>
        </div>
    );
}

export default Overview;
