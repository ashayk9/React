import React,{useState, useEffect} from 'react';
import './App.css';
import Todos from './Components/Todos'
import Addtodo from './Components/Addtodo';
import {v4 as uuid} from 'uuid';

function App() {
  const [state,setState] = useState([
    {id: uuid() ,title:'good morning',completed:false},
    {id: uuid() ,title:'good afternoon',completed:true},
    {id: uuid() ,title:'good evening',completed:false}
  ]);
  // useEffect(()=>{
  //   addtodo(state.title);
  // },[]);
  
  const markcomplete=(id)=>{
    console.log('selcted '+ id);
    // let completed=id.completed;
    // setState(prevState=>{
    //   return{...prevState,completed:completed}
    // });
    setState(state.map(todo=>{
      if(todo.id === id)
      {
        todo.completed=!todo.completed;
      }
      return todo;
    }));
  }
  const del=(id)=>{
    console.log(state);
    setState(state.filter(todo=>todo.id!==id));
    
  }
  const addtodo=title=>{
    console.log(title);
    let newtodo = {
      id:uuid(),
      title:title,
      completed:false,
    }
    console.log(newtodo);
    // setState([...state,newtodo]);
    // console.log(state);

     setState(prevState=>{
        return[...prevState,newtodo]
       })
    console.log(state);
      

    //setState(newtodo);
    
    
  }
  // useEffect(()=>{
  //   addtodo();
  // });
  // const adding=()=>{
  //   console.log(state)
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Todoapp</h1>

        <Addtodo addtodo={addtodo}/>
        
        {state.map(todo=>(
          <Todos key={todo.id} todo={todo} markcomplete={markcomplete} del={del} />
        ))}
        
        
      </header>
    </div>
  );
}

export default App;
