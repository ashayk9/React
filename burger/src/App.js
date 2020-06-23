import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person'
import Counter from './Components/Counter';
import Cart from './Components/Cart';
import CartItems from './Components/CartItems';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  const [items,setitems]=useState([
    {id:1, value:1},
    {id:2, value:0}
  ]);

  const handleDelete = (itemId)=>{
    console.log("event handler called ",itemId);
    //items=items.filter(c=>c.id!==itemId);
    setitems(items.filter(c=>c.id!==itemId));
    
  }
  const handleReset = ()=>{
    setitems(items.map(item=>{
      
      item.value=0;
      console.log(item)
      return item;
    }));
    
  }
  
  return (
    <div className="App">
      <Router>
      {/* <Counter/>
      <Person />
      <CartItems items={items} handleDelete={handleDelete}/> */}
      

          <Route path="/counter" component={Counter}/>
          <Route path="/person" component={Person}/>
          <Route path="/cart" render={()=>{
            return(
              <CartItems items={items} handleDelete={handleDelete}/>  
            )
          }}/>
            

      </Router>
    </div>
  );
}

export default App;
