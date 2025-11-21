import CartWidget from './CartWidget';
import { Link } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from '../style/Navbar.module.css';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function Navbar({ categorias }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar >

                    <Typography 
                    component={Link} 
                    to="/"
                    variant="h4" 
                    sx={{ color: "white", flexGrow: 0.02,textDecoration: "none"  }}
                    >
                        KAZEOVER
                    </Typography>

                    <Button
                        component="div"
                        variant="h6"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Categorias
                    </Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
                        }}
                    >
                       

                        {categorias.map(cat => (
                             <MenuItem 
                             to={`/category/${cat}`} 
                             key={cat}
                             component={Link}
                             onClick={handleClose}
                             >
                            {cat}  
                             </MenuItem>
                        ))}

                    </Menu>


                    <Button
                        color="inherit">
                        <CartWidget />
                        <span className={styles.Badge}>3</span>
                    </Button>

                </Toolbar>
            </AppBar>
            <Toolbar sx={{ paddingY: 5 }}></Toolbar>
        </Box>
    );



    /* 
            <nav className={styles.Navegador}>
    
    
                
                
                <Box>
    
                <h1 className={styles.Logo}> <Link to="/">KAZEOVER</Link> </h1>
                    
                    <ul className={styles.Categorias}>
                        {categorias.map(cat => (
                            <Link to={`/category/${cat}`} key={cat}> {cat}   </Link>
                        ))}
                    </ul>
    
                </Box>
    
            </nav>
        ) */
}
