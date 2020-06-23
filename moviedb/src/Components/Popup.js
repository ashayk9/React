import React from 'react';

const Popup = ({selected,closePopup})=>{
    return(
        <div className="popup">
            <h2>{selected.Title} <span>({selected.Year})</span></h2>
            <img src={selected.Poster}/>
            <p>IMDBRating:{selected.imdbRating}({selected.Rated})</p>
            <p className="content">PLOT:-{selected.Plot}</p>
            <button onClick={closePopup} className="btn close-btn">Close</button>
        </div>
    )
};
export default Popup;