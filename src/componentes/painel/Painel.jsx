import React from 'react'
import NavBar from '../navbar/NavBar';
import Agendamento from '../agendamento/Agendamento';
import Grid from '@mui/material/Grid';

export default function Painel() {
  return (
    <>
      <Grid container justifyContent={'center'} spacing={5}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item>
          <Agendamento />
        </Grid>
      </Grid>
    </>
  )
}
