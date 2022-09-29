import React from 'react'
import { Checkbox, TableCell } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles(ToateConcediileStyle)

function RowFunctinon(props) {
  const classes = useStyles()
  const { row } = props
  const dateIncep = row?.dataInceput.split('T')[0].split('-')
  const dataIncepAfis = dateIncep[2] + '/' + dateIncep[1] + '/' + dateIncep[0]
  const dateSfars = row?.dataSfarsit.split('T')[0].split('-')
  const dataSfarsAfis = dateSfars[2] + '/' + dateSfars[1] + '/' + dateSfars[0]

  return (
    <TableRow className={classes.Rows} selected={true} onChange={console.log(row?.angajatNume)}>
      {/* <Checkbox></Checkbox> */}
      <TableCell className={classes.Cell}>{row?.angajatNume}</TableCell>
      <TableCell className={classes.Cell}>{row?.angajatPrenume}</TableCell>
      <TableCell className={classes.Cell}>{row?.tipConcediuNume}</TableCell>
      <TableCell className={classes.Cell}>{dataIncepAfis}</TableCell>
      <TableCell className={classes.Cell}>{dataSfarsAfis}</TableCell>
      <TableCell className={classes.Cell}>{row?.inlocuitorNume}</TableCell>
      <TableCell className={classes.Cell}>{row?.stareConcediu}</TableCell>
    </TableRow>
  )
}
RowFunctinon.propTypes = {
  row: PropTypes.array
}

export default RowFunctinon
