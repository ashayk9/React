import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import "./App.css";

const App = ()=>{
  const api_id="b4035d6e";
  const api_key = "1aa1e262aa5d4a454d244a1e2382f88f";

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState('chocolate');

  useEffect(()=>{
    getRecipe();
  },[query]);
  const getRecipe = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updatesearch = e => {
    setSearch(e.target.value);
    
  };
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updatesearch}/>
        <button className="search-btn" type="submit">Search</button>
        
      </form>
      {recipes.map(recipe=>(
        <Recipe title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        key={recipe.recipe.label}
        // ingrediants={recipe.recipe.ingrediants}
        />
      ))}

    </div>
  )
}
export default App;
