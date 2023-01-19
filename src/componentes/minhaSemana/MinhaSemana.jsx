import React from 'react';
import MinhaSemanaCalendario from './MinhaSemanaCalendario';
import NavBar from '../navbar/NavBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function MinhaAgenda() {
    return (
        <>
            <NavBar />
            <br />
            <br />
            <Grid container justifyContent={'center'}>
                <Box sx={{ width: '1200px' }}>
                     <MinhaSemanaCalendario />
                </Box>
            </Grid>
        </>
    )
}
