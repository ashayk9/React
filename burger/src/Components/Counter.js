import React,{useState} from 'react';
import './Counter.css';

const Counter = ()=>{

    let [count,setCount]=useState(0);

    const getBtnClass = ()=>
    {
        let classes = "btn ";
        //classes += {count} === 0 ?"btn-danger":"btn-primary";
        if (count===0){
            classes = classes + "btn-danger";
        }
        else{
            classes=classes+"btn-primary";
        }
        return classes;
    };

    
    const handlerClick = ()=>
    {
        
        count=count + 1;
        setCount(count);
        console.log(count);
        return count;
    }

    return(
        <div>
            <h3>hi this is react app</h3>
            <p value={count}>{count}</p>
            <button className={getBtnClass()} onClick={handlerClick}>increment</button>
        </div>
    )
};
export default Counter;