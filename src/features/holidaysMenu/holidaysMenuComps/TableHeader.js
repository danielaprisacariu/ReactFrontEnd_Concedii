import React from 'react'
import { TableHead, TableRow, TableCell, makeStyles } from '@material-ui/core'
import HolidaysMenuStyle from '../HolidaysMenuStyle'
const useStyles = makeStyles(HolidaysMenuStyle)

function TableHeader() {
  const classes = useStyles()
  return (
    <TableHead className={classes.Header}>
      <TableRow className={classes.HeaderRow}>
        <TableCell className={classes.Cell}>Data Inceput</TableCell>
        <TableCell className={classes.Cell}>Data Sfarsit</TableCell>
        <TableCell className={classes.Cell}>Tip Concediu</TableCell>
        <TableCell className={classes.Cell}>Inlocuitor</TableCell>
        <TableCell className={classes.Cell}>Comentarii</TableCell>
        <TableCell className={classes.Cell}>Stare Concedii</TableCell>
      </TableRow>
    </TableHead>
  )
}
export default TableHeader
