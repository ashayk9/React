import React from 'react';
import {Link} from 'react-router-dom';

const Search = (props)=>{
    

    return(
    <div>
    <input  type="text" className="searchbar" placeholder="Search for a movie"  onChange={props.handleInput} />
    <Link to={'/movies'}> 
        <span className="btn" onClick={props.getMovie}>Submit</span>
    </Link> 
    </div>
    )};
export default Search;