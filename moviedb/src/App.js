import React,{useState} from 'react';
import './App.css';
import Search from './Components/Search';
import Results from './Components/Results';
import Popup from './Components/Popup';

function App() {
  

  const [state,setState]=useState({
    s:"",
    results:[],
    selected:{},
  });

  const apiurl="http://www.omdbapi.com/?i=tt3896198&apikey=9b8cf2be";
  const api=`http://www.omdbapi.com/?apikey=9b8cf2be&s=${state.s}`;

  const getMovies = async()=>{
    const response=await fetch(api);
    const data=await response.json();
    console.log(data);
    let results = data.Search;
    //console.log(results);
    setState(prevState=>{
      return{...prevState, results:results}
    });
    //console.log(state);
  }
  
  const handleInput = (e)=>{
      let s = e.target.value;
      
      setState(prevState=>{
        return{...prevState,s:s}
      });
      //console.log(state.s);
  }
  const openPopup = async (id)=>{
    const response=await fetch(`http://www.omdbapi.com/?i=${id}&apikey=9b8cf2be`);
    //const response=await fetch(apiurl);
    const data = await response.json();
    let selected = data;
    console.log(selected);
    let element=document.querySelector('.popup');
    element.style.display='block';
    
    setState(prevState=>{
      return{...prevState,selected:selected}
    });
    console.log(state.selected)
    
  }
  const closePopup = ()=>{
    let element=document.querySelector('.popup');
    element.style.display='none';
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>movie database</h1>
      </header>

      <main>

        <Search value={state.s}  handleInput={handleInput} getMovie={getMovies} />

        <div className="result">
        {state.results.map(result=>(
            <Results openPopup={openPopup} key={result.imdbID} result={result} />
        ))}
        </div>

        <div>
          <Popup closePopup={closePopup} selected={state.selected}/>
        </div>


      </main>
    </div>
  );
}

export default App;
