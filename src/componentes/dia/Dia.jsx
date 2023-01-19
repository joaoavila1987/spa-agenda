import React from 'react';
import NavBar from '../navbar/NavBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DiaCalendario from './DiaCalendario';

export default function Dia() {
    return (
        <>
            <NavBar />
            <br />
            <br />
            <Grid container justifyContent={'center'}>
                <Box sx={{ width: '1200px' }}>
                   <DiaCalendario />
                </Box>
            </Grid>
        </>
    )
}
