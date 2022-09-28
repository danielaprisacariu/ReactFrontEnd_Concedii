import React from 'react'

import {TableRow,TableCell,makeStyles} from '@material-ui/core'
import HolidayMenuStyle from '../HolidaysMenuStyle'
import PropTypes from 'prop-types'
const useStyles=makeStyles(HolidayMenuStyle)
function HMTableRow({row}){
 
   const dataIElems=row.dataInceput.split('T')[0].split('-')
   const dataIDisplay=dataIElems[2]+'/'+dataIElems[1]+'/'+dataIElems[0]
   const dataSElems=row.dataSfarsit.split('T')[0].split('-')
   const dataSDisplay=dataSElems[2]+'/'+dataSElems[1]+'/'+dataSElems[0]

    const classes=useStyles()
    return(
<TableRow className={classes.Rows} >
<TableCell className={classes.Cell}>{dataIDisplay}</TableCell>
<TableCell className={classes.Cell}>{dataSDisplay}</TableCell>
<TableCell className={classes.Cell}>{row.tipConcediuNume}</TableCell>
<TableCell className={classes.Cell}>{row.inlocuitorNume}</TableCell>
<TableCell className={classes.Cell}>{row.comentarii}</TableCell>
<TableCell className={classes.Cell}>{row.stareConcediuNume}</TableCell>
</TableRow>)}
HMTableRow.propTypes={
    row: PropTypes.object
}
export default HMTableRow