import React from 'react';

const Results = ({result,openPopup})=>{
    return(
        <div className="eachresult" onClick={()=>openPopup(result.imdbID)}>
            <img src={result.Poster}/>
            <h3>{result.Title}</h3>
        </div>
    );
}
export default Results;