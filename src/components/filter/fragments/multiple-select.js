import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput } from '@mui/material';
import { useState } from 'react';

const MultipleSelect = ({ items, tag }) => {
    const [value, setValue] = useState([]);

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setValue(
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    return (
        <div className='multiple-select'>
          <FormControl sx={{ pl: 1, width: '10rem' }}>
            <InputLabel>{tag}</InputLabel>
            <Select
              multiple
              value={value}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {items.map((item) => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={value.indexOf(item) > -1} />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
};

export default MultipleSelect;