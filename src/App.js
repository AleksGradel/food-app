// import RecipeCard from './components/recipe-card';
import { useEffect, useState } from 'react';
import edamam from './apis/edamam';
import SearchBar from './components/search/search-bar';

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
      <SearchBar label="What are you craving today?" />
    </div>
  );
};

export default App;
