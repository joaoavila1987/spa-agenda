import React from 'react';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import 'dayjs/locale/pt-br';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Agendamento() {

    const dataHoje = Date.now();
    const locale = 'pt-br';

    const [data, setData] = useState(dataHoje);

    const handleData = (e) => {
        let _data = e;
        setData(_data);
    }

    const handleMarcarCliente = (e) => {

    }

    return (
        <>
            <Grid container maxWidth={'1000px'}>
                <Grid container spacing={4} justifyContent={'center'}>
                    <Grid item >
                        <Box sx={{ width: '450px' }}>
                            <TextField fullWidth label="Nome" id="fullWidth" />
                        </Box>
                    </Grid>

                    <Grid item >
                        <Box sx={{ width: '250px' }}>
                            <TextField fullWidth label="Telefone" id="fullWidth" />
                        </Box>
                        <br />
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'} spacing={4}>
                    <Grid item>
                        <Box sx={{ width: '350px' }}>
                            <TextField fullWidth label="email" id="fullWidth" />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{ width: '250px' }} xs={12} md={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                                <DesktopDateTimePicker
                                    label="Data"
                                    //inputFormat="DD/MM/YYYY"
                                    value={data}
                                    onChange={e => handleData(e)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                        <br />
                    </Grid>
                    <Grid item>
                        <Stack sx={{width : '200px'}}>
                        <Button
                            type="submit"
                            fullWidth
                            size='large'
                            variant="contained"
                            onClick={(e) => handleMarcarCliente(e)}
                            sx={{
                                my: 2, color: 'white', bgcolor: 'black', '&:hover': {
                                    backgroundColor: '#ccc',
                                    borderColor: '#fff',
                                    boxShadow: 'none',
                                    color: '#000'
                                },
                            }}>
                            Agendar Cliente
                        </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
