import React from 'react';

import './search.css'

const SearchBox = ({handleChange}) => {
    return(
        <div className='search-filter'>
            
                <div className='searchbox'>
                    <input type="text"
                    className="search_text"
                    placeholder="Search for a country..."
                    onChange= { handleChange}/>
                </div>

                <div>
                    <select name='select' id='select' className='search_text'>
                        <option value='Filter by region'>Filter by region</option>
                        <option value='Africa'>Africa</option>
                        <option value='America'>Americas</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
                </div>
        </div>
        
        
    )
}

export default SearchBox