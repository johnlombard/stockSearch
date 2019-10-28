import React from 'react';
import './SearchBar.scss'


const SearchBar = props => {
    return (
        <div className="searchBar">
            <form className="">
                <label className="searchBar__label">Stock Ticker Search</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    className=""
                    type="text"
                    maxLength="4"
                />
                <button onClick={props.handleFormSubmit} className="searchBar__button">
                    Search
                </button>
            </form>
        </div>
    );
}


export default SearchBar;