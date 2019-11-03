import React from 'react';


const SearchTheme = () => {
    return(
        <div className="navBase">
            <div className="mainNav">
                <div className="logo">
                    <h3>Github Friends</h3>
                </div>
                <div className="searchForm">
                    <form>
                        <input 
                        type="text"
                        name="search" 
                        placeholder="Search" />
                        <button>Go</button>
                    </form>
                    <select>
                        <option>Light Theme</option>
                        <option>Dark Theme</option>
                    </select>
                </div>
            </div>
        </div>
    );
}


export default SearchTheme