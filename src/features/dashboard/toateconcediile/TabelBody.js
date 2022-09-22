import React from 'react'
import { TableCell } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { PropTypes } from 'prop-types'
import RowFunctinon from './RowFunctinon.js'


const useStyles= makeStyles(ToateConcediileStyle)


function BodyTabel(props) {
  const { miguel ,page, RopVal } = props
  
  const classes = useStyles()
  return (
    <TableBody>
      {miguel?.slice(page * RopVal, (page + 1) * RopVal).map(miguel => (
        <RowFunctinon row={miguel} key={miguel.id}/>
      ))}
    </TableBody>
  )
}

BodyTabel.propTypes={
miguel: PropTypes.array,
page: PropTypes.number,
RopVal: PropTypes.number
}
export default BodyTabel
