import { FormControl, TextField, Button } from '@mui/material';
import { useState } from 'react';

import './search-bar.scss'

const SearchBar = ({ label, triggerSearch }) => {
    const [searchTerm, setTerm] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleTermChange = e => {
        setTerm(e.target.value);
        console.log(searchTerm);
    };

    const handleSearch = () => {
        triggerSearch(searchTerm);
    };

    return (
        <div className='search-bar'>
            <FormControl style={{ width: '100%' }} onSubmit={handleSubmit}>
                <TextField
                    label={label}
                    value={searchTerm}
                    onChange={handleTermChange}
                />
                <Button variant="contained" type="submit" onClick={handleSearch}>Search</Button>
            </FormControl>
        </div>
    );
};

export default SearchBar;