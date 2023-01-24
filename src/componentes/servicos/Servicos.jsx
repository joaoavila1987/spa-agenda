import React from 'react'
import NavBar from '../navbar/NavBar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
//import Box from '@mui/material/Box';

export default function Servicos() {
  return (
    <>
      <NavBar />
      <br />
      <Grid container justifyContent={'center'}>
        <Grid item xs={12}>
          <Typography textAlign="center" variant='h6' sx={{ color: 'black' }} >Serviços</Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container justifyContent={'center'} spacing={3} xs={12} md={12} >

        <Grid item  xs={12} md={8}>
          <TextField fullWidth size='large' label="Descrição do serviço" />
        </Grid>
      
        {/* <Grid item xs={12} md={3}>
     <TextField fullWidth size='large' label="Valor"  />
    </Grid> */}

        <Grid item>
          <Button
            variant="contained"
            sx={{
              my: 2, color: 'white', bgcolor: 'black', '&:hover': {
                backgroundColor: '#ccc',
                borderColor: '#ccc',
                boxShadow: 'none',
                color: '#000'
              },
            }}
            startIcon={<AddIcon />}>
            Adicionar
          </Button>
        </Grid>
      </Grid>

    </>
  )
}
