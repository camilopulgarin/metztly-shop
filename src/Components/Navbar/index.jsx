import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCartContext } from "../../Context";
//import { ShoppingBag as ShoppingBagIcon, Moon as MoonIcon } from "@mui/icons-material";
import { ShoppingBagIcon, MoonIcon } from "@heroicons/react/24/solid"
const Navbar = () => {
    const { carProducts, setSearchByCategory } = useContext(ShoppingCartContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navLinks = [
        { to: '/all', label: 'All', action: () => setSearchByCategory('') },
        { to: '/clothes', label: 'Clothes', action: () => setSearchByCategory('clothing') },
        { to: '/electronics', label: 'Electronics', action: () => setSearchByCategory('electronics') },
        { to: '/furnitures', label: 'Furnitures', action: () => setSearchByCategory('electronics') },
        { to: '/toys', label: 'Toys', action: () => setSearchByCategory('electronics') },
        { to: '/others', label: 'Others', action: () => setSearchByCategory('jewelery') },
    ];

    return (
        <AppBar position="fixed" color="default">
            <Toolbar className="flex justify-between">
                {/* Logo y Nombre */}
                <Typography variant="h6" component="div">
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Box display="flex" alignItems="center">
                            Metztly <MoonIcon className="h-6 text-black" />
                        </Box>
                    </NavLink>
                </Typography>

                {/* Menú de escritorio */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="gap-3">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            onClick={link.action}
                            style={({ isActive }) => ({
                                textDecoration: isActive ? 'underline' : 'none',
                                textUnderlineOffset: '4px',
                                color: 'inherit'
                            })}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <NavLink to="/my-orders" style={{ textDecoration: 'none', color: 'inherit' }}>My Orders</NavLink>
                    <NavLink to="/my-account" style={{ textDecoration: 'none', color: 'inherit' }}>My Account</NavLink>
                    <NavLink to="/sign-in" style={{ textDecoration: 'none', color: 'inherit' }}>Sign In</NavLink>
                    <Box display="flex" alignItems="center">
                        <ShoppingBagIcon className="h-6 text-black" />
                        <Typography variant="body2">{carProducts.length}</Typography>
                    </Box>
                </Box>

                {/* Botón de Menú de Hamburguesa */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Drawer para dispositivos móviles */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
            >
                <List>
                    {navLinks.map((link, index) => (
                        <ListItem button key={index} onClick={link.action}>
                            <NavLink to={link.to} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                                <ListItemText primary={link.label} />
                            </NavLink>
                        </ListItem>
                    ))}
                    <ListItem button>
                        <NavLink to="/my-orders" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                            <ListItemText primary="My Orders" />
                        </NavLink>
                    </ListItem>
                    <ListItem button>
                        <NavLink to="/my-account" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                            <ListItemText primary="My Account" />
                        </NavLink>
                    </ListItem>
                    <ListItem button>
                        <NavLink to="/sign-in" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                            <ListItemText primary="Sign In" />
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <ShoppingBagIcon className="h-6 text-black" />
                        <Typography variant="body2">{carProducts.length}</Typography>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;