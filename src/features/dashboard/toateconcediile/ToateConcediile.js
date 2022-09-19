import React, { Fragment } from 'react'
import { Typography, Grid, Container, Table, TableCell } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import "./ToateConcediile.css"



function ToateConcediile(){
    const addToast = useToast()
    addToast('Welcome', 'success')
    return (
    <Fragment>
      <Table className = 'Parinte'>
        <tr className='HeaderTable1'>
            <TableCell>Nume</TableCell>
            <TableCell>Prenume</TableCell>
            <TableCell>Data incepere</TableCell>
            <TableCell>Data sfarsit</TableCell>
            <TableCell>Tip concediu</TableCell>
            <TableCell>Inlocuitor</TableCell>
            <TableCell>Stare concediu</TableCell>
            
        </tr>
        <tr className='Content'>
            <TableCell>Miguel</TableCell>
            <TableCell>Gustavo</TableCell>
            <TableCell>21/09/2022</TableCell>
            <TableCell>23/09/2022</TableCell>
            <TableCell>Odihna</TableCell>
            <TableCell>Ionut</TableCell>
            <TableCell>Aprobat</TableCell>
        </tr>
      </Table>
    </Fragment>
    )
}

export default ToateConcediile;