import React from 'react';

const Todos = ({todo,markcomplete,del})=>{
    const getStyle = ()=>{
        return{
            background:'white',
            color:'black',
            
            width:'100%',
            margin:'10px',
            // padding:'10px',
            textDecoration: todo.completed ? 'line-through' : 'none'
        }
    }
    const btnClose = ()=>{
        return{
            hieght:'20px',
            backgroundColor:'red',
            borderRadius:'5px',
            padding:'5px',
            marginLeft:'5px',
            position:'relative',
            
            cursor:'pointer',
            border:'none',
            color:'white',
        }
    }
    // const markcomplete = ()=>{
    //     console.log('-'+todo.id)
    // }

    
    return(
        <div style={getStyle()}>
            
            <h2 className="content">
                <input style={{marginLeft:'10px',}} className="checkbox" type="checkbox" onChange={()=>markcomplete(todo.id)}/>{' '}
                {todo.title}
                <button onClick={()=>del(todo.id)} style={btnClose()}>X</button>
            </h2>
        </div>
    )}
export default Todos;