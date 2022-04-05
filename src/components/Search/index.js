import { changeSearchTerm } from 'redux/actions/UserActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Search.css';

const Search = () => {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const action = changeSearchTerm(value);
        dispatch(action);
    }

    return (
        <form className='search-form'>
            <label htmlFor='search-term' className='search-form__label'>Search User</label>
            <input
                value={searchTerm}
                onChange={handleSearchTermChange}
                id='search-term'
                className='search-form__input'
            />
        </form >
    )
}

export default Search;
