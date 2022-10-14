import React from 'react';
import '../search/Search.css';

const Search = ({ inputValue, onInputChange }) => {
    return (
        <div className='searchItem'>
            <input type="text" placeholder='Search hundreds of vouchers' className='voucherInput' value={inputValue} onChange={onInputChange} />
            <div className="searchIcon">
                <i className="fi fi-br-search"></i>
            </div>
        </div>
    )
}

export default Search