import React from 'react'
import TableHeader from './holidaysMenuComps/TableHeader'
import HMTableBody from './holidaysMenuComps/HMTableBody'
import HMTableFooter from './holidaysMenuComps/HMTableFooter'
import { TableContainer,Table} from '@material-ui/core'
import { PropTypes } from 'prop-types'
import {makeStyles} from '@material-ui/core'
import HolidaysMenuStyle from './HolidaysMenuStyle'
const useStyles=makeStyles(HolidaysMenuStyle)
function HMTable(props) {
   const { page, setPage, rows, rowsOnPage,tipuriConcedii,handleRopValChange,RopVals }=props
    const classes=useStyles()
    console.log("HMTable"+RopVals)
  return (
    <>

    <TableContainer className={classes.Table}>
     <Table>
      <TableHeader tipuriConcedii={tipuriConcedii} />
      <HMTableBody page={page} rows={rows} rowsOnPage={rowsOnPage} />
      <HMTableFooter RopVals={RopVals} page={page} setPage={setPage} rows={rows} rowsOnPage={rowsOnPage} handleRopValChange={handleRopValChange}/>
    </Table>
    </TableContainer>
    </>
  )
}
HMTable.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  rows: PropTypes.array,
  rowsOnPage: PropTypes.number,
  tipuriConcedii: PropTypes.array,
  handleRopValChange: PropTypes.func,
  RopVals:PropTypes.array
}
export default HMTable
