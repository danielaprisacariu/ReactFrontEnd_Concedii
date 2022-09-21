import React from 'react'
import { TableBody, TableRow, TableCell, makeStyles } from '@material-ui/core'
import HolidaysMenuStyle from '../HolidaysMenuStyle'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles(HolidaysMenuStyle)
function HMTableBody(props) {
  const { rows, page, rowsOnPage } = props
  const classes = useStyles()
  return (
    <TableBody className={classes.TableBody}>
      {rows?.slice(page * rowsOnPage, (page + 1) * rowsOnPage).map(row => (
        <TableRow className={classes.Rows} key={row.Id}>
          <TableCell className={classes.Cell}>{row.DataInceput}</TableCell>
          <TableCell className={classes.Cell}>{row.DataSfarsit}</TableCell>
          <TableCell className={classes.Cell}>{row.TipConcediu}</TableCell>
          <TableCell className={classes.Cell}>{row.Inlocuitor}</TableCell>
          <TableCell className={classes.Cell}>{row.Comentarii}</TableCell>
          <TableCell className={classes.Cell}>{row.StareConcedii}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
HMTableBody.propTypes = {
  rows: PropTypes.array,
  page: PropTypes.number,
  rowsOnPage: PropTypes.number
}
export default HMTableBody
