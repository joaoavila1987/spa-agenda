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
import MenuItem from '@mui/material/MenuItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


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

    const servico = [
        { value: '0', label: 'Corte de Cabelo' },
        { value: '1', label: 'Corte de Barba' },
        { value: '2', label: 'Hidratação' },
        { value: '3', label: 'Corte Infantil' },
        { value: '4', label: 'Tratamento de Calvice' },
        { value: '5', label: 'Tratamento' }
    ]

    //colocar um select para que seja adicionada o tipo de serviço 

    return (
        <>
            <Grid container maxWidth={'1000px'}>
                <Grid container spacing={4} justifyContent={'center'}>
                    <Grid item >
                        <Box sx={{ width: '350px' }}>
                            <TextField fullWidth label="Nome" id="fullWidth" />
                        </Box>
                    </Grid>

                    <Grid item >
                        <Box sx={{ width: '200px' }}>
                            <TextField fullWidth label="Telefone" id="fullWidth" />
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{ width: '300px' }}>
                            <TextField
                                fullWidth
                                id="grupo"
                                select
                                label="Tipo de Serviços"
                                defaultValue="N"
                            >
                                {servico.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
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
                        <Stack sx={{ width: '250px' }}>
                            <Button
                                type="submit"
                                fullWidth
                                size='large'
                                variant="contained"
                                onClick={(e) => handleMarcarCliente(e)}
                                startIcon={<CalendarMonthIcon  />}
                                sx={{
                                    my: 2, color: 'white', bgcolor: 'black', height: '55px', bottom: '15px', '&:hover': {
                                        backgroundColor: '#ccc',
                                        borderColor: '#fff',
                                        boxShadow: 'none',
                                        color: '#000',

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
