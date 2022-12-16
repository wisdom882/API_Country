import React from 'react';

import './search.css'

export const SearchBox = ({handleChange}) => (
    <div className='searchbox'>
        <input type="text"
        className="search_text"
        placeholder="Search for a country..."
        onChange= { handleChange}/>
    </div>
    
)