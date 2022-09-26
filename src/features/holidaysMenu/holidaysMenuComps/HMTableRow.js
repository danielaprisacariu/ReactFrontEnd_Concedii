import React from 'react'
import {TableRow,TableCell,makeStyles} from '@material-ui/core'
import HolidayMenuStyle from '../HolidaysMenuStyle'
import PropTypes from 'prop-types'
const useStyles=makeStyles(HolidayMenuStyle)
function HMTableRow({row}){
    const classes=useStyles()
    return(
<TableRow className={classes.Rows} >
<TableCell className={classes.Cell}>{row.dataInceput}</TableCell>
<TableCell className={classes.Cell}>{row.dataSfarsit}</TableCell>
<TableCell className={classes.Cell}>{row.tipConcediuNume}</TableCell>
<TableCell className={classes.Cell}>{row.inlocuitorNume}</TableCell>
<TableCell className={classes.Cell}>{row.comentarii}</TableCell>
<TableCell className={classes.Cell}>{row.stareConcediuNume}</TableCell>
</TableRow>)}
HMTableRow.propTypes={
    row: PropTypes.object
}
export default HMTableRow