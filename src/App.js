import { useEffect, useState } from 'react';
import edamam from './apis/edamam';
import SearchBar from './components/search/search-bar';
import RecipesList from './components/recipes/recipes-list';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const response = await edamam.get('', {
      params: {
        q: 'pasta'
      }
    });

    setRecipes(response.data.hits);

    console.log(response);
  }

  return (
    <div className='receipe-app'>
      <SearchBar label="What are you craving today?" />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default App;
