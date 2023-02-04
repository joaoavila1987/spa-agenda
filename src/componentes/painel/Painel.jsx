import React from 'react'
import NavBar from '../navbar/NavBar';
import Agendamento from '../agendamento/Agendamento';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


export default function Painel() {
  return (
    <>
      <Grid container justifyContent={'center'} spacing={5}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container justifyContent={'center'} spacing={3}>
        <Grid item>
          <Stack sx={{ width: '200px' }}>
            <Button
              type="submit"
              fullWidth
              size='small'
              variant="contained"
              startIcon={<SearchIcon />}
              sx={{
                my: 2, color: 'white', bgcolor: 'black', height: '55px', bottom: '15px', '&:hover': {
                  backgroundColor: '#ccc',
                  borderColor: '#fff',
                  boxShadow: 'none',
                  color: '#000',
                },

              }}>
              Buscar Cliente
            </Button>
          </Stack>
        </Grid>
        <Grid item>
          <Stack sx={{ width: '220px' }}>
            <Button
              type="submit"
              fullWidth
              size='small'
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                my: 2, color: 'white', bgcolor: 'black', height: '55px', bottom: '15px', '&:hover': {
                  backgroundColor: '#ccc',
                  borderColor: '#fff',
                  boxShadow: 'none',
                  color: '#000',
                },
              }}>
              Incluir novo Serviço
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent={'center'}>
        <Grid item>
          <Agendamento />
        </Grid>
      </Grid>
    </>
  )
}
