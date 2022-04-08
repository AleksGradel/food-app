import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchBar = ({ label }) => {
    const [searchTerm, setTerm] = useState('');

    return (
        <div>
            <TextField
                style={{ width: '100%' }}
                label={label}
                value={searchTerm}
                onChange={(e) => setTerm(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                            <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </div>
    );
};

export default SearchBar;