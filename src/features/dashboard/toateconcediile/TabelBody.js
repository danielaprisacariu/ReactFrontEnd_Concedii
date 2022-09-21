import React from 'react'
import { TableCell } from '@material-ui/core'
import './ToateConcediile.css'
import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { PropTypes } from 'prop-types'


const useStyles= makeStyles(ToateConcediileStyle)


function BodyTabel(props) {
  const { miguel ,page } = props
  
  const classes = useStyles()
  return (
    <TableBody>
      {miguel?.slice(page * 1, (page + 1) * 1).map(row => (
        <TableRow className={classes.Rows} key={row.id}>
          <TableCell className={classes.Cell}>{row.name}</TableCell>
          <TableCell className={classes.Cell}>{row.surname}</TableCell>
          <TableCell className={classes.Cell}>{row.date}</TableCell>
          <TableCell className={classes.Cell}>{row.date2}</TableCell>
          <TableCell className={classes.Cell}>{row.inlocuitor}</TableCell>
          <TableCell className={classes.Cell}>{row.stare}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

BodyTabel.propTypes={
miguel: PropTypes.array,
page: PropTypes.number
}
export default BodyTabel