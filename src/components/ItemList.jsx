import { Link } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CardActionArea from "@mui/material/CardActionArea"
import Typography from '@mui/material/Typography';
import { formatPrice } from '../utils/formatPrice';
import { Box } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


export default function ItemList({ items }) {
    return (

        <React.Fragment>
            <CssBaseline />

            <Grid container
                spacing={2}
                justifyContent="center"
                sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: 3,
                    boxShadow: 2,
                    py: 4,
                    px: 3,
                }}
            >
                {items.map(item => (

                    <Grid key={item.id} item xs={12} sm={6} md={3} display="flex"
                        justifyContent="center">

                        <CardActionArea
                            component={Link}
                            to={`/detail/${item.id}`}
                            sx={{
                                textDecoration: "none",
                                color: "inherit",
                                width: "100%",
                                maxWidth: 200,
                                height: 300,    
                                 borderRadius: 2,
                                    boxShadow: 2,      
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box
                                sx={{
                                    height: 200,
                                    width: '200',
                                    borderRadius: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 2,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item?.img?.url ?? item?.img}
                                    alt={item?.img?.alt ?? item?.name}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>

                            <Box sx={{ width: "100%", p: 2, display: "flex", flexDirection: "column" }}>

                                <Typography variant="subtitle1" fontWeight={700} noWrap>
                                    {item.name}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {item.description}
                                </Typography>

                                <Typography variant="subtitle1" fontWeight={800} sx={{ mt: "auto" }}>
                                    {formatPrice(item.price)}
                                </Typography>
                            </Box>
                        </CardActionArea>
                    </Grid>
                ))
                }
            </Grid >
        </React.Fragment >
    );
}

