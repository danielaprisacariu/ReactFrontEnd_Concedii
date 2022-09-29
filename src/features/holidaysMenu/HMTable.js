import React from 'react'
import TableHeader from './holidaysMenuComps/TableHeader'
import HMTableBody from './holidaysMenuComps/HMTableBody'
import HMTableFooter from './holidaysMenuComps/HMTableFooter'
import { Table} from '@material-ui/core'
import { PropTypes } from 'prop-types'
import {makeStyles} from '@material-ui/core'
import HolidaysMenuStyle from './HolidaysMenuStyle'
import { AdministrareAngajati } from 'features/AdministrareAngajati/AdministrareAngajati'
const useStyles=makeStyles(HolidaysMenuStyle)
function HMTable(props) {
   const { page, setPage, rows, rowsOnPage,handleRopValChange,RopVals }=props
    const classes=useStyles()
    console.log("HMTable"+RopVals)
  return (
  

   <>
     <Table className={classes.Table}>
      <TableHeader  />
      <HMTableBody page={page} rows={rows} rowsOnPage={rowsOnPage} />
      <HMTableFooter RopVals={RopVals} page={page} setPage={setPage} rows={rows} rowsOnPage={rowsOnPage} handleRopValChange={handleRopValChange}/>
    </Table>
   
    </> 
  )
}
HMTable.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  rows: PropTypes.array,
  rowsOnPage: PropTypes.number,

  handleRopValChange: PropTypes.func,
  RopVals:PropTypes.array
}
export default HMTable
