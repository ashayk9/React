import React,{useState} from 'react';

const Addtodo = ({addtodo})=>{
    const [items,setItems]=useState({
        title:"",
    })
    

    const getSearchStyle = ()=>{
        return{
            display:'inline block',
            width:'80%',
            fontSize:'30px',
            padding:'10px',
            borderRadius:'8px',
        }
    }
    
    
    const addinput = (e)=>{
        let title = e.target.value;
        setItems(prevState=>{
            return{...prevState,title:title}
        });
        console.log(items)
    }
    
    return(
        
        
        // <form className="form" onSubmit={()=>addtodo(items.title)}>
        //     <input value={items.title} onChange={addinput} style={getSearchStyle()} type="text" placeholder="title" />
        //     <input type="submit"  className="btn" value="submit"/>
        // </form>

        <div className="form" >
            <input value={items.title} onChange={addinput} style={getSearchStyle()} type="text" placeholder="title" />
            <button  onClick={()=>addtodo(items.title)} className="btn">submit</button>
        </div>
    )
}
export default Addtodo;