import { Button, Modal, Fade, Box, Typography, Backdrop, Link, Divider } from '@mui/material';

import { useState } from 'react';

import './recipe-modal.scss';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const RecipeModal = ({label, recipeLink, ingredients}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const showIngredients = ingredients.map(ingredient => {
        return (
            <li>
                {ingredient.text}
            </li>
        )
    });

    return (
        <div className='recipe-modal'>
            <Button size="small" onClick={handleOpen}>
                Learn more...
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {label}
                    </Typography>
                    <Divider />
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <ul>
                            {showIngredients}
                        </ul>
                    </Typography>
                    <Link 
                        href={recipeLink} 
                        target="_blank">
                        See full recipe
                    </Link>
                </Box>
                </Fade>
            </Modal>
        </div>
    )
};

export default RecipeModal;