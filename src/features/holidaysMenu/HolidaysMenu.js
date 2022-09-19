import React, { Fragment } from 'react'
import { Typography, Grid, TableCell, Table } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'


function HolidaysMenu() {
  
  return (
    <Fragment>
      <Table class="Tabel">
        <tr><TableCell>Nume <input type="text"></input></TableCell></tr>
        <tr><TableCell>Prenume <input type="text"></input></TableCell></tr>
        <tr><TableCell>Tip Concediu<input type="password"></input></TableCell></tr>

        <tr><TableCell>Data inceput<input type="text"></input></TableCell></tr>
        <tr><TableCell>Data sfarsit<input type="text"></input></TableCell></tr>
        <tr><TableCell>Comentarii<input type="text"></input></TableCell></tr>
      </Table>
    </Fragment>
  )
}

export default HolidaysMenu