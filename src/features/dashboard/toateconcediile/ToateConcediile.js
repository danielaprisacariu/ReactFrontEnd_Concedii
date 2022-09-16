import React, { Fragment } from 'react'
import { Typography, Grid, Container, Table, TableCell } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'


function ToateConcediile(){
    const addToast = useToast()
    addToast('Welcome', 'success')
    return (
    <Fragment>
      <Table>
        <tr>
            <TableCell>Nume</TableCell>
            <TableCell>Prenume</TableCell>
            <TableCell>Data incepere</TableCell>
            <TableCell>Data sfarsit</TableCell>
            <TableCell>Tip concediu</TableCell>
            <TableCell>Inlocuitor</TableCell>
            <TableCell>Stare concediu</TableCell>
            
        </tr>

      </Table>
    </Fragment>
    )
}

export default ToateConcediile;