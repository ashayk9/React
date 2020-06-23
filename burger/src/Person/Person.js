import React,{ useState,useEffect} from 'react';



const Person = () => {
    const [name,setName]=useState('Ashay');
    const [surname,setSurname]=useState('Mehta');
    const width=useWidth();
    

    function handlerNameChange(e){
        setName(e.target.value);
    }
    function handlerSurnameChange(e){
        setSurname(e.target.value);
    }

    return (
        <div>
            {/* <p>hello i m {props.name} and age is {props.age}</p>
            <p>{props.children}</p> */}
            <div >
                <p>Name</p>
                <input onChange={handlerNameChange}
                value={name}
                />
            </div>
            <div >
                <p>surname</p>
                <input onChange={handlerSurnameChange}
                value={surname}
                />
            </div>
            <div >
                <p>width</p>
                {width}
            </div>
        </div>
    )};

export default Person;

function useWidth(){
    const [width,setWidth]=useState(window.innerWidth);

    useEffect(()=>{
        const resize= ()=> setWidth(window.innerWidth);
        window.addEventListener('resize',resize);
        return ()=>{
            window.removeEventListener('resize',resize);
        };
    });
    return width;
}