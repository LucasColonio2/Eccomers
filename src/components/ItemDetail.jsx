import ItemCount from "./ItemCount"
import { Grid } from "@mui/material"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { formatPrice } from "../utils/formatPrice";
import { Stack } from "react-bootstrap";

export default function ItemDetail({ item }) {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Grid size={4} >
                <img src={item?.img.url}
                    alt={item?.img.alt}
                    style={{
                        width: '100%',
                        height: "auto",
                        objectFit: 'contain'
                    }}
                />

            </Grid>

            <Grid size={4} >


                <Typography variant="h6" gutterBottom>{item?.name}</Typography>

                <Typography variant="body2" gutterBottom>
                    {item?.description}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {formatPrice(item?.price)}
                </Typography>
                <ItemCount item={item} />
            </Grid>


        </Grid>










    )
}