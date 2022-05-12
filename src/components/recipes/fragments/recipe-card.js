import {
  Chip,
  Grid,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import RecipeModal from "./recipe-modal";

import "./recipe-card.scss";

const RecipeCard = ({
  label,
  source,
  description,
  recipeLink,
  ingredients,
  calories
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="recipe-card">
        <Card sx={{ minHeight: 300 }}>
          <CardMedia component="img" height="140" image={source} alt={label} />
          <CardContent>
            <div className="title">
                <Stack direction="row" spacing={1}>
                    <Chip 
                        title="Cuisine type"
                        label={description} 
                        color="primary" 
                        variant="outlined" />
                    <Chip 
                        title="Calories"
                        label={Math.round(calories)} 
                        color="warning"
                        variant="outlined" 
                        icon={<LocalFireDepartmentIcon />}/>
                </Stack>
                <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="div" 
                    className="title" 
                    mt={1}>
                    {label}
                </Typography>
            </div>
          </CardContent>
          <RecipeModal
            label={label}
            recipeLink={recipeLink}
            ingredients={ingredients}
          />
        </Card>
      </div>
    </Grid>
  );
};

export default RecipeCard;
