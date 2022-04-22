import { useEffect, useState } from 'react';
import edamam from './apis/edamam';
import SearchBar from './components/search/search-bar';
import Filters from './components/filter/filters';
import RecipesList from './components/recipes/recipes-list';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    search();
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

    setRecipes(response.data.hits);

    console.log(response);
  }

  return (
    <div className='receipe-app'>
      <SearchBar 
        triggerSearch={triggerSearch}
        label="What are you craving today?" />
      <Filters/>
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default App;
