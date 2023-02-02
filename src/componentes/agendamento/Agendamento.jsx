import React from 'react';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

import 'dayjs/locale/pt-br';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Agendamento() {

    const dataHoje = Date.now();
    const locale = 'pt-br';

    const [data, setData] = useState(dataHoje);

    const handleData = (e) => {
        let _data = e;
        setData(_data);
    }

    return (
        <>
            <Grid container justifyContent={'center'} spacing={4}>

                <Grid item>
                    <TextField fullWidth label="Nome" id="fullWidth" />
                </Grid>

                <Grid item>
                    <TextField fullWidth label="Telefone" id="fullWidth" />
                </Grid>

                <Grid item>
                    <TextField fullWidth label="email" id="fullWidth" />
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

            </Grid>
        </>
    )
}
