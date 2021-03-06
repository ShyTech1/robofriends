import React from "react";

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div className="pa2"> 
            <input
            className="pa3 ba b--green bg-lightest-blue" 
            onChange={searchChange}
            type="text" 
            placeholder="search robot"/>
        </div>
    )
}

export default SearchBox;