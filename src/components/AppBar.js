import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

class Page {
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }
}


const pages = [
    new Page('Home','/'), 
    new Page('About Us','/about'), 
    new Page('Work','/work'), 
    new Page("Read",'/read'), 
    new Page("Listen", '/listen'), 
    new Page("Invest", '/invest'), 
    new Page("New Members", '/newmembers'), 
    new Page("Governance", "/governance")
];


export const MainAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" className="appBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={process.env.PUBLIC_URL + 'assets/media/bankless.png'} alt='Bankless' className="logoStyle" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.path} style={{textDecoration: 'none', color: 'inherit'}} key={page.name} >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={process.env.PUBLIC_URL + '/assets/media/bankless.png'} alt='Bankless'  className="logoStyle" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', paddingRight: '25px' } }}>
            {pages.map((page) => {
                return(
                <Link to={page.path} style={{textDecoration: 'none', color: 'inherit'}} key={page.name}>
              <Button
                className='menuButton'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
              </Link>
            )})}
          </Box>

            <div>
                <Button className="connectBtn">Connect Wallet</Button>
            </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

