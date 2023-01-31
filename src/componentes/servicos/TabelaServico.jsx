import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
//import IconButton from '@mui/material/IconButton';


export default function TabelaServico() {

    const columns = [
        { 
          field: 'id', 
          headerName: 'ID', 
          width: 90,
          editable: false
        },

        {
          field:'descricao',
          headerName: 'Descrição',
          width: 300,
          editable: false
        },
        {
          field:'deletar',
          headerName: 'Excluir',
          width: 50,
          editable: false
        }
      ];
      
      const listaServicos = [

        { id: 1, descricao: 'Corte de cabelo' },
        { id: 2, descricao: 'Barba complera' },
        { id: 3, descricao: 'Hidratação' },
        { id: 4, descricao: 'Tratamento de Tintura' }
        
        ]

  return (
    <>
    <Box sx={{ height: 400, width: '75%' }}>
      <DataGrid
        rows={listaServicos}
        columns={columns}
        disableSelectionOnClick
      />
    </Box>    
    </>
  )
}
