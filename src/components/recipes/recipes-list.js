import RecipeCard from "./fragments/recipe-card";
import { Grid } from "@mui/material";

import './recipes-list.scss';

const RecipesList = ({ recipes }) => {
    const showRecipes = recipes.map((recipe) => {
        return (
            <RecipeCard 
                key={recipe.recipe.label}
                label={recipe.recipe.label} 
                source={recipe.recipe.images.REGULAR.url}
                description={recipe.recipe.cuisineType}
                recipeLink={recipe.recipe.url}
                ingredients={recipe.recipe.ingredients} />
        )
    })
    return (
       <div className="recipes-list">
           <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >{showRecipes}</Grid>
       </div>
    )
};

export default RecipesList;