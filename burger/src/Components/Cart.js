import React,{useState} from 'react';

const Cart = (props)=>{

    let [count,setCount]=useState(props.value);
    // const [items,setitems]=useState([
    //     {id:1, value:0},
    //     {id:2, value:0}
    // ]);
  
    const handlerClickIncr = ()=>
    {
        
        count=count + 1;
        setCount(count);
        console.log(count);
        return count;
    }
    const handlerClickDecre = ()=>
    {
        count=count-1;
        setCount(count);
        return count;
    }
    

    return(
        
        <div className="card">
            
            <span className=" btn btn-primary" >{count}</span>
            <button className="btn"  onClick={handlerClickIncr}>increment</button>
            <button className="btn " onClick={handlerClickDecre}>decrement</button>
            <button className="btn btn-danger" onClick={props.onDelete}>Del</button>
        </div>
        
    )
};
export default Cart;