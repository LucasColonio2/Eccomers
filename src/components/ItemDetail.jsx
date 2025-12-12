import ItemCount from "./ItemCount"
import { Grid } from "@mui/material"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { formatPrice } from "../utils/formatPrice";


export default function ItemDetail({ item }) {
    return (
        <Container maxWidth="sm" >

            <Grid container spacing={0}>
                <Grid size={6}>
                    <img src={item?.img} />
                </Grid>

                <Grid size={6}>
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
        </Container>








    )
}