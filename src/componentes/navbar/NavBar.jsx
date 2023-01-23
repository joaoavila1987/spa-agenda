import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import PainelIcon from '@mui/icons-material/Dashboard';
import AgendaIcon from '@mui/icons-material/CalendarMonth';
import ServicoIcon from '@mui/icons-material/DesignServices';
import SemanaIcon from '@mui/icons-material/CalendarViewWeek';
import Fire from '@mui/icons-material/LocalFireDepartment';
import Alarme from '@mui/icons-material/AccessAlarm';
import '@fontsource/roboto/500.css';


function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }; const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Alarme sx={{ display: { xs: 'none', md: 'flex' , color:'red' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                           // flexGrow: 1,
                            fontFamily: 'roboto',
                            fontWeight: 200,
                            //letterSpacing: '.3rem',
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                    Minha Agenda
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
     
                            <MenuItem>
                            <Link to="/painel" style={{ textDecoration: 'none' }}>
                            <Typography textAlign="center" sx={{ color : 'black'}}>Meu Painel</Typography>
                            </Link>
                            </MenuItem>

                            <MenuItem>
                            <Link to="/dia" style={{ textDecoration: 'none' }}>
                            <Typography textAlign="center" sx={{ color : 'black'}}>Hoje</Typography>
                            </Link>
                            </MenuItem>

                            <MenuItem>
                            <Link to="/semana" style={{ textDecoration: 'none' }}>
                            <Typography textAlign="center" sx={{ color : 'black'}} >Minha Semana</Typography>
                            </Link>
                            </MenuItem>

                            <MenuItem>
                            <Link to="/agenda" style={{ textDecoration: 'none' }}>
                            <Typography textAlign="center" sx={{ color : 'black'}} >Agenda</Typography>
                            </Link>
                            </MenuItem>

                              <MenuItem>
                            <Link to="/servicos" style={{ textDecoration: 'none' }}>
                            <Typography textAlign="center" sx={{ color : 'black'}} >Serviços</Typography>
                            </Link>
                            </MenuItem>

                        </Menu>
                    </Box>
                    <Alarme sx={{ display: { xs: 'flex', md: 'none' , color:'red' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'roboto',
                            fontWeight: 200,
                           // letterSpacing: '.3rem',
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                        Minha Agenda
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <MenuItem>
                            <Link to="/painel" style={{ textDecoration: 'none' }} >
                                <Button
                                    variant="contained"
                                    size={'large'}
                                    sx={{ my: 2, color: 'white', bgcolor: 'black',  '&:hover': {
                                        backgroundColor: '#fff',
                                        borderColor: '#fff',
                                        boxShadow: 'none',
                                        color: '#000'
                                      },}}
                                      startIcon={<PainelIcon />}>
                                    Meu Painel
                                </Button>
                            </Link>
                          

                            <Link to="/dia" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    startIcon={<Fire />}
                                    size={'large'}
                                    sx={{ my: 2, color: 'white', bgcolor: 'black',  '&:hover': {
                                        backgroundColor: '#fff',
                                        borderColor: '#fff',
                                        boxShadow: 'none',
                                        color: '#000'
                                      },}}>
                                    Hoje
                                </Button>
                            </Link>

                            <Link to="/semana" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    startIcon={<SemanaIcon />}
                                    size={'large'}
                                    sx={{ my: 2, color: 'white', bgcolor: 'black',  '&:hover': {
                                        backgroundColor: '#fff',
                                        borderColor: '#fff',
                                        boxShadow: 'none',
                                        color: '#000'
                                      },}}>
                                    Minha Semana
                                </Button>
                            </Link>

                            <Link to="/agenda" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    size={'large'}
                                    startIcon={<AgendaIcon />}
                                    sx={{ my: 2, color: 'white', bgcolor: 'black',  '&:hover': {
                                        backgroundColor: '#fff',
                                        borderColor: '#fff',
                                        boxShadow: 'none',
                                        color: '#000'
                                      },}}>
                                    Agenda
                                </Button>
                            </Link>

                            <Link to="/servicos" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    startIcon={<ServicoIcon />}
                                    size={'large'}
                                    sx={{ my: 2, color: 'white', bgcolor: 'black',  '&:hover': {
                                        backgroundColor: '#fff',
                                        borderColor: '#fff',
                                        boxShadow: 'none',
                                        color: '#000'
                                      },}}>
                                    Serviços
                                </Button>
                            </Link>
                        </MenuItem>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                         
                            <MenuItem>
                            <Link to="/minha-conta" style={{ textDecoration: 'none' }}>
                            <Typography textAlign="center" sx={{ color : 'black'}}>Minha Conta</Typography>
                            </Link>
                            </MenuItem>

                            <MenuItem>
                            <Link to="/configuracoes" style={{ textDecoration: 'none' }}>
                            <Typography textAlign="center" sx={{ color : 'black'}}>Configurações</Typography>
                            </Link>
                            </MenuItem>

                            <MenuItem>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                            <Typography textAlign="center" sx={{ color : 'black'}} >Sair</Typography>
                            </Link>
                            </MenuItem>
                         
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;