import React from 'react';

const Search = (props)=>{
    

    return(
    <div>
    <input  type="text" className="searchbar" placeholder="Search for a movie"  onChange={props.handleInput} />
    <span className="btn" onClick={props.getMovie}>Submit</span>
    </div>
    )};
export default Search;