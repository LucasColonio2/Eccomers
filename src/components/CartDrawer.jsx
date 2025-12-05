import { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { primerContext } from "../context/CartContext";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function CartDrawer({ open, onClose }) {
    const { carrito, addToCart, removeOneFromCart, clearCart, total } =
        useContext(primerContext);

    const isEmpty = !Array.isArray(carrito) || carrito.length === 0;

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: 500,
                    backgroundColor: "#121212",
                    color: "#fff",
                },
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", p: 2, pb: 1 }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Carrito
                </Typography>

                <IconButton onClick={onClose} sx={{ color: "#fff" }}>

                    <CloseIcon />

                </IconButton>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

            <Box sx={{ p: 2, flexGrow: 1 }}>
                {isEmpty ? (
                    <Typography variant="body1">
                        Todavía no hay ningún producto agregado al carrito.
                    </Typography>
                ) : (
                    <>
                        <List>
                            {carrito.map((prod) => (
                                <ListItem
                                    key={prod.id}
                                    sx={{ alignItems: "center" }}
                                    disableGutters
                                >
                                    <Avatar
                                        variant="square"
                                        src={prod.thumbnail}
                                        alt={prod.title}
                                        sx={{ width: 40, height: 40, mr: 1 }}
                                    />

                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            minWidth: 0,      
                                            mr: 1,
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 500,
                                                whiteSpace: "normal",
                                                wordBreak: "break-word",
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            {prod.title}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: "#bbb" }}>
                                            {prod.quantity} x ${prod.price ?? 0}
                                        </Typography>
                                    </Box>

                                    {/* Botones */}
                                    <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            onClick={() => addToCart(prod)}
                                        >
                                            +
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="error"
                                            onClick={() => removeOneFromCart(prod.id)}
                                        >
                                            -
                                        </Button>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>

                        <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.5)" }} />

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="subtitle1">Total:</Typography>
                            <Typography variant="h6">${total}</Typography>
                        </Box>

                        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="inherit"
                                onClick={clearCart}
                            >
                                Vaciar carrito
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Drawer>
    );
}