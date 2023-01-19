import React from 'react'
import NavBar from '../navbar/NavBar';
import Calendario from './Calendario';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Agenda() {
  return (
    <>
      <NavBar />
      <br/>
      <br/>
      <Grid container justifyContent={'center'}>
        <Box sx={{width :'1200px'}}>
          <Calendario />
        </Box>
      </Grid>

    </>
  )
}
