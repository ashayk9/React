import React from 'react';

const Recipe=({title,calories,image})=>{
    return (
        <div>
            <h1>{title}</h1>
            {/* <ul>
                {ingrediants.map(ingrediant => (
                    <li>{ingrediant.text}</li>
                ))}
            </ul> */}
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}
export default Recipe;