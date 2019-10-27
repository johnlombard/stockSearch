import React from 'react';


const SearchBar = props => {
    return (
        <div className="ui segment">
            <form className="ui form">
                <label>Image Search</label>
                <input 
                    onChange={props.handleInputChange}
                    value={props.value}
                    className="field" 
                    type="text" 
                    maxLength="4"
                />
           
            <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        </form>
        </div> 
    );
}


export default SearchBar;