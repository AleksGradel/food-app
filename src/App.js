// import RecipeCard from './components/recipe-card';
import { FormControl, InputLabel, Input, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import edamam from './apis/edamam';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const response = await edamam.get();

    console.log(response);
  }

  return (
    <div className='receipe-app'>
      <Grid container spacing={2} columns={16} className="uuu">
        <FormControl style={{width: '100%'}}>
          <Grid item>
            <InputLabel>Type</InputLabel>
            <Input id="my-input" />
          </Grid>
          <Grid item>
            <Button variant="contained">Search</Button>
          </Grid>
        </FormControl>
      </Grid>
      {/* <RecipeCard /> */}
    </div>
  );
};

export default App;
