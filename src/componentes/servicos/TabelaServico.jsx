import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
//import VerIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const servico = [
  {
    id: '01',
    descricao: 'Corte de Cabelo'
  },
  {
    id: '02',
    descricao: 'Corte de Barba'
  },
  {
    id: '03',
    descricao: 'Hidratação'
  },
  {
    id: '04',
    descricao: 'Corte Ifantil'
  },
  {
    id: '05',
    descricao: 'Tratamento de Calvice'
  },
  {
    id: '06',
    descricao: 'Tratamento'
  }
]

export default function TabelaServico() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Id</StyledTableCell>
            <StyledTableCell align="left">Descrição</StyledTableCell>
            <StyledTableCell align="center">Remover</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {servico.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.descricao}</StyledTableCell>
              <StyledTableCell align="center">

                <IconButton aria-label="editar">
                  <DeleteIcon />
                </IconButton>

              </StyledTableCell>


            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
