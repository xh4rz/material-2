import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";

import Logo from "./images/Logo.png";

const useStyles = makeStyles((theme) => ({
  // offset: theme.mixins.toolbar,
  // menuButton: {
  //     marginRight: theme.spacing(2),
  // },
  separation: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 100,
  },
  logo: {
    maxWidth: 100,
  },
}));


const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative" style={{ backgroundColor: "#262236" }}>
        <Toolbar className={classes.toolbar}>
          {/* <IconButton color="inherit" arial-label="menu" className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton> */}

          <Box className={classes.separation}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </Box>

          <Button variant="text" color="inherit">
            <Box pr={1}>
              <i className="fas fa-user fa-2x" style={{ color: "#ED7526" }}></i>
            </Box>
            Mi cuenta
          </Button>

          <Button variant="text" color="inherit">
            <Box pr={1}>
              <i
                className="fas fa-clipboard-list fa-2x"
                style={{ color: "#ED7526" }}
              ></i>
            </Box>
            Mis pedidos
          </Button>

          <Button variant="text" color="inherit">
            <Box pr={1}>
              <i
                className="fas fa-shopping-cart fa-2x mb-2"
                style={{ color: "#ED7526" }}
              ></i>
            </Box>
            Mi carrito
          </Button>
        </Toolbar>
      </AppBar>

      <AppBar position="relative" style={{ backgroundColor: "#3EE4EC" }}>
        <Toolbar>
          {/* <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        Categorias
                    </Button>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu> */}

          <Button variant="text" color="inherit">
            <Box pr={1}>
              <i className="fas fa-home fa-2x"
               style={{ color: "#ED7526" }}>
               </i>
            </Box>
                    Inicio
          </Button>

          <Button variant="text" color="inherit">
            <Box pr={1}>
              <i
                className="fas fa-tags fa-2x"
                style={{ color: "#ED7526" }}
              ></i>
            </Box>
                    Ofertas
          </Button>

          <Button variant="text" color="inherit">
            <Box pr={1}>
              <i
                className="fas fa-map-marker-alt fa-2x"
                style={{ color: "#ED7526" }}
              ></i>
            </Box>
                    Tiendas
          </Button>

          <Button variant="text" color="inherit">
            <Box pr={1}>
              <i
                className="fas fa-store fa-2x"
                style={{ color: "#ED7526" }}
              ></i>
            </Box>
                    Conócenos
          </Button>

          <Button variant="text" color="inherit">
            <Box pr={1}>
              <i
                className="fas fa-handshake fa-2x"
                style={{ color: "#ED7526" }}
              ></i>
            </Box>
                    Servicios
          </Button>

        </Toolbar>
      </AppBar>
      {/* <div className={classes.offset}></div> */}
    </div>
  );
};

export default Navbar;
