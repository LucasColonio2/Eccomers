import { Link } from 'react-router';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardActionArea from "@mui/material/CardActionArea"
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ItemList({ items }) {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {items.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>


                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea
                                component={Link}
                                        to={`/detail/${item.id}`} >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.thumbnail}
                                        alt={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1">
                                            {item.price}

                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>


                                <CardActions>
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to={`/detail/${item.id}`}> Ver mas</Button>;
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment >
    );
}

