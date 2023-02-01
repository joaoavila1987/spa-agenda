import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import 'dayjs/locale/pt-br';

export default function Agendador() {

//     <Grid item>
//     <Box sx={{ width: '250px' }} xs={12} md={2}>
//         <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
//             <DesktopDatePicker
//                 label="Data de Nascimento"
//                 inputFormat="DD/MM/YYYY"
//                 value={this.state.contato.Aniversario}
//                 onChange={e => this.handleAniversario(e)}
//                 renderInput={(params) => <TextField {...params} />}
//             />
//         </LocalizationProvider>
//     </Box>
//     <br />
// </Grid>


    const [openModalAgendador, setOpenModalAgendador] = useContext(MyContext);

    const handleOpen = () => setOpenModalAgendador(true);
    const handleClose = () => setOpenModalAgendador(false);

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
        <>
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
                open={openModalAgendador}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Dados de data e agendamento.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Aqui vai entrar os dados de data e agendamento.
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
