import React, { Fragment, useState } from 'react'
import { Typography, Grid, Container, Table, TableCell } from '@material-ui/core'
import './ToateConcediile.css'
import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableContainer from '@material-ui/core/TableContainer'
import TabelHeader from './TabelHeader'
import TabelFooter from './TabelFooter'
import TabelBody from './TabelBody'

const useStyles = makeStyles(ToateConcediileStyle)

function ToateConcediile() {
  const totateConcediile = [
    { id: 1, name: 'Popescu', surname: 'Alex', date: '29/02/2022', date2: '31/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 2, name: 'Gogu', surname: 'Alex', date: '27/02/2022', date2: '30/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 3, name: 'Gustavo', surname: 'Alex', date: '26/02/2022', date2: '19/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 4, name: 'Miguel', surname: 'Alex', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' }
  ]
  const classes = useStyles()

  const [pagini] = useState(0)

  return (
    <TableContainer className={classes.Tabel}>
      <Table>
        <TabelHeader />
        { <TabelBody miguel={totateConcediile} page={pagini}/> }
        <TabelFooter />
      </Table>
    </TableContainer>
  )
}

export default ToateConcediile
