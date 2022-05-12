import { useEffect, useState } from "react";
import edamam from "./apis/edamam";
import SearchBar from "./components/search/search-bar";
import RecipesList from "./components/recipes/recipes-list";
import { ThemeProvider } from "@mui/material/styles";
import { Divider, Typography } from "@mui/material";
import theme from "./theme";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    search();
  }, [query]);

  const debounce = (fn, delay) => {
    let timeout;

    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const triggerSearch = debounce((searchTerm) => {
    setQuery(searchTerm);
  }, 1000);

  const search = async () => {
    const response = await edamam.get("",
      {
        params: {
          q: query,
        },
      }, 0
    );

    setRecipes(response.data.hits);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="receipe-app">
        <Typography
          gutterBottom
          component="div"
          color="secondary"
          mt={3}
          sx={{
            display: "flex",
            "justify-content": "center",
            "font-size": "2rem",
          }}
        >
          Food app &#129367;
        </Typography>
        <SearchBar
          triggerSearch={triggerSearch}
          label="What do you crave today?"
        />
        <Divider />
        <RecipesList recipes={recipes} />
      </div>
    </ThemeProvider>
  );
};

export default App;
