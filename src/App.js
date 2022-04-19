import { useEffect, useState } from 'react';
import edamam from './apis/edamam';
import SearchBar from './components/search/search-bar';
import RecipesList from './components/recipes/recipes-list';

import LinearProgress from '@mui/material/LinearProgress';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, handleLoading] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => search(), 0);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const triggerSearch = searchTerm => {
    setQuery(searchTerm);
  }

  const search = async () => {
    const response = await edamam.get('', {
      params: {
        q: query
      }
    }, 0);

    handleLoading(true);

    setRecipes(response.data.hits);

    handleLoading(false);
    console.log(response);
  }

  const ShowSpinner = () => {
    if (isLoading === false) {
      return;
    } else {
      return (
        <div>
          hej <br />
          <LinearProgress />
        </div>
      );
    }
  };

  return (
    <div className='receipe-app'>
      <SearchBar 
        triggerSearch={triggerSearch}
        label="What are you craving today?" />
      <ShowSpinner />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default App;
