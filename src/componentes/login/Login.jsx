import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Logo from '../../assets/imagens/logo.jpg';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Odon Sistemas
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Acesso() {

    let navigate = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // const ValidarEmail = (email) => {
    //     const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     let resp = regex.test(email);
    //     return resp;
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === 'joaoavila.py@gmail.com' && senha === 'avila1334') {
            navigate.push('/home');
        }
    };

    const handleEmail = (e) => {
        let _email = e.target.value;
        setEmail(_email);
    }

    const handleSenha = (e) => {
        let _senha = e.target.value;
        setSenha(_senha);
    }

    console.log(`email ${email} e senha ${senha}`)

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                       backgroundImage: 'url(https://source.unsplash.com/random)',
                        //backgroundImage: `url(${ImagemDentista})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* <img width={'180'} className='imagemLogin' src={Logo} alt="Odon" /> */}
                        <Typography component="h2" variant="h6">
                            Entre na sua conta
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => handleEmail(e)}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="senha"
                                label="Senha"
                                type="password"
                                id="senha"
                                autoComplete="current-password"
                                sx={{bgcolor:'witer' , borderColor : 'black' }}
                                onChange={(e) => handleSenha(e)}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={(e) => handleSubmit(e)}
                                sx={{ mt: 3, mb: 2 , bgcolor:'black' }}
                            >
                                Entrar
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" sx={{color : 'black'}}>
                                        Esqueci a minha senha?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" sx={{color : 'black'}}>
                                        {"Não tem uma conta ? Cadastre-se aqui"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}