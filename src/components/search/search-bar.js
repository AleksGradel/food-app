import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";

import "./search-bar.scss";

const SearchBar = ({ label, triggerSearch }) => {
  const [searchTerm, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);

    triggerSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <FormControl style={{ width: "100%" }} onSubmit={handleSubmit}>
        <TextField
          label={label}
          value={searchTerm}
          onChange={handleTermChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  );
};

export default SearchBar;
