import React from 'react'
import { TableCell } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { PropTypes } from 'prop-types'


const useStyles= makeStyles(ToateConcediileStyle)

function RowFunctinon(props){
    const classes = useStyles()

    const{row}=props
    return(
     <TableRow className={classes.Rows} >
        <TableCell className={classes.Cell}>{row.name}</TableCell>
        <TableCell className={classes.Cell}>{row.surname}</TableCell>
        <TableCell  className={classes.Cell}>{row.Tip}</TableCell>
        <TableCell className={classes.Cell}>{row.date}</TableCell>
        <TableCell className={classes.Cell}>{row.date2}</TableCell>
        <TableCell className={classes.Cell}>{row.inlocuitor}</TableCell>
        <TableCell className={classes.Cell}>{row.stare}</TableCell>
      </TableRow>
      )


}
RowFunctinon.propTypes={
    row: PropTypes.array
}

export default RowFunctinon