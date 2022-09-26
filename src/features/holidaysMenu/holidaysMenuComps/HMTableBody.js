import React from 'react'
import { TableBody,makeStyles } from '@material-ui/core'
import HolidaysMenuStyle from '../HolidaysMenuStyle'
import { PropTypes } from 'prop-types'
import HMTableRow from './HMTableRow'

const useStyles = makeStyles(HolidaysMenuStyle)
function HMTableBody(props) {
  const { rows, page, rowsOnPage } = props
  const classes = useStyles()
  return (
    <TableBody className={classes.TableBody}>
      {rows?.slice(page * rowsOnPage, (page + 1) * rowsOnPage).map(row => (
       <HMTableRow key={row.id} row={row}/>
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
