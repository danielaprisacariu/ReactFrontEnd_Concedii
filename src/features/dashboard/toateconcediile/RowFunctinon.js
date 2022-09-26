import React from 'react'
import { TableCell } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles(ToateConcediileStyle)

function RowFunctinon(props) {
  const classes = useStyles()

  const { row } = props
  return (
    <TableRow className={classes.Rows}>
      <TableCell className={classes.Cell}>{row?.angajatNume}</TableCell>
      <TableCell className={classes.Cell}>{row?.angajatPrenume}</TableCell>
      <TableCell className={classes.Cell}>{row?.tipConcediuNume}</TableCell>
      <TableCell className={classes.Cell}>{row?.dataInceput}</TableCell>
      <TableCell className={classes.Cell}>{row?.dataSfarsit}</TableCell>
      <TableCell className={classes.Cell}>{row?.inlocuitorNume}</TableCell>
      <TableCell className={classes.Cell}>{row?.stareConcediu}</TableCell>
    </TableRow>
  )
}
RowFunctinon.propTypes = {
  row: PropTypes.array
}

export default RowFunctinon
