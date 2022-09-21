import React from 'react'
import { TableHead, TableRow, TableCell, makeStyles,TextField } from '@material-ui/core'
import HolidaysMenuStyle from '../HolidaysMenuStyle'

import { PropTypes } from 'prop-types'
const useStyles = makeStyles(HolidaysMenuStyle)

function TableHeader(props) {
  const { tipuriConcedii } = props
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
TableHeader.propTypes = {
  tipuriConcedii: PropTypes.array
}
export default TableHeader
