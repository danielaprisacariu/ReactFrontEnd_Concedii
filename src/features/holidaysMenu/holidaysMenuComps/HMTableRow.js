import React from 'react'
import {TableRow,TableCell,makeStyles} from '@material-ui/core'
import HolidayMenuStyle from '../HolidaysMenuStyle'
import PropTypes from 'prop-types'
const useStyles=makeStyles(HolidayMenuStyle)
function HMTableRow({row}){
    const classes=useStyles()
    return(
<TableRow className={classes.Rows} >
<TableCell className={classes.Cell}>{row.DataInceput}</TableCell>
<TableCell className={classes.Cell}>{row.DataSfarsit}</TableCell>
<TableCell className={classes.Cell}>{row.TipConcediu}</TableCell>
<TableCell className={classes.Cell}>{row.Inlocuitor}</TableCell>
<TableCell className={classes.Cell}>{row.Comentarii}</TableCell>
<TableCell className={classes.Cell}>{row.StareConcedii}</TableCell>
</TableRow>)}
HMTableRow.propTypes={
    row:Array.PropTypes
}
export default HMTableRow