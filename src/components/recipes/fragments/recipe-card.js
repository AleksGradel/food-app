import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';

import RecipeModal from './recipe-modal';

import './recipe-card.scss';

const RecipeCard = ({ label, source, description, recipeLink, ingredients }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className="recipe-card">
                <Card sx={{ maxWidth: 300, minHeight: 300 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image={source}
                    alt={label}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Chip label={description} color="primary" variant="outlined" />
                        </Typography>
                    </CardContent>
                    <RecipeModal 
                        label={label}
                        recipeLink={recipeLink}
                        ingredients={ingredients}
                    />
                </Card>
            </div>
        </Grid>
    )
};

export default RecipeCard;