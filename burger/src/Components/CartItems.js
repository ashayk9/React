 import React from 'react';
 import Cart from './Cart';

 const CartItems = ({items,handleDelete})=>{
     return(
         <div>
        <h1>Cart</h1>
        {items.map(item =>(
            <Cart key={item.id}  value={item.value} onDelete={()=>handleDelete(item.id)}/>
        ))}
        <button className="btn" >Reset</button>
        </div>
     )
 }
 
 export default CartItems;