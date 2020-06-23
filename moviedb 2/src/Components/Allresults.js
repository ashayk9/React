import React from 'react';
import Results from './Results';
import { Link } from 'react-router-dom';

const Allresults = ({results,openPopup})=>{
    return(
        <div className="result">
        {results.map(result=>(
            <Link to={'popup'}>
            <Results openPopup={openPopup} key={result.imdbID} result={result} />
            </Link>
        ))}
        </div>
    )
}
export default Allresults;