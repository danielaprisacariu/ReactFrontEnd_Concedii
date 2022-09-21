import React from 'react'
import TableHeader from './holidaysMenuComps/TableHeader'
import HMTableBody from './holidaysMenuComps/HMTableBody'
import HMTableFooter from './holidaysMenuComps/HMTableFooter'
import { TableContainer } from '@material-ui/core'
import { PropTypes } from 'prop-types'
function HMTable({ page, setPage, rows, rowsOnPage }) {
  return (
    <TableContainer>
      <TableHeader />
      <HMTableBody page={page} rows={rows} rowsOnPage={rowsOnPage} />
      <HMTableFooter page={page} setPage={setPage} rows={rows} />
    </TableContainer>
  )
}
HMTable.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  rows: PropTypes.array,
  rowsOnPage: PropTypes.number
}
export default HMTable
