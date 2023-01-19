import React from 'react'
import NavBar from '../navbar/NavBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AgendaCalendario from './AgendaCalendario';

export default function Agenda() {
  return (
    <>
      <NavBar />
      <br/>
      <br/>
      <Grid container justifyContent={'center'}>
        <Box sx={{width :'1200px'}}>
          <AgendaCalendario />
        </Box>
      </Grid>

    </>
  )
}
