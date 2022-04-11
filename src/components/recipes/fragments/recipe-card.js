import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

import './recipe-card.scss';

const RecipeCard = ({ label, source, description }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className="recipe-card">
                <Card sx={{ maxWidth: 300, minHeight: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={source}
                        alt={label}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Grid>
    )
};

export default RecipeCard;