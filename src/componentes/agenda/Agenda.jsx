import React from 'react';
import NavBar from '../navbar/NavBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AgendaCalendario from './AgendaCalendario';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from 'react';


export default function Agenda() {

  
  function ModalAgendamento() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
     // border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
  
    return (
      <div>
         <Button variant="contained"
         onClick={handleOpen}
          sx={{
            my: 2, color: 'white', bgcolor: 'black', '&:hover': {
              backgroundColor: '#ccc',
              borderColor: '#fff',
              boxShadow: 'none',
              color: '#000'
            },
          }}>Criar Agendamento</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }






  return (
    <>
      <NavBar />
      <br />
      <br />
      <Grid container justifyContent={'center'}>
        <ModalAgendamento/>

      </Grid>
      <br />
      <Grid container justifyContent={'center'}>
        <Box sx={{ width: '1200px' }}>
          <AgendaCalendario />
        </Box>
      </Grid>
    </>
  )
}
