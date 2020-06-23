import React from 'react';
import "./App.css";

function Tweet(props)
{
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default Tweet;