import React, { Fragment } from 'react'
import { TableCell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles(ToateConcediileStyle)



function FooterTabel(props) {
  const {miguelito, page, setPage} = props
  const classes = useStyles()
  return(
  <TableFooter className={classes.Footer}>
    <TableRow className={classes.Rows}>
      <TableCell className={classes.Cell}></TableCell>
      <TableCell className={classes.Cell}></TableCell>
      <TableCell className={classes.Cell}></TableCell>
      <TableCell className={classes.Cell}></TableCell>
      <TableCell className={classes.Cell}></TableCell>
      <TableCell className={(classes.Cell, classes.CF)}>
      {page !==0 && (<>  <div
        onClick={() => {
          setPage(0)
        }}
        className={classes.BtnPrev}
      >
        <div className={classes.FBar}></div>
        <div className={classes.BtnPrevCover}></div>
      </div>
      <div
        onClick={() => {
          setPage(page - 1)
        }}
        className={classes.BtnPrev}
      >
        <div className={classes.BtnPrevCover}></div>
      </div></>)}
          {page!==Math.ceil(miguelito.length/5 - 1) &&(<><div
        onClick={() => {
          setPage(page + 1)
        }}
        className={classes.BtnNext}
      >
        <div className={classes.BtnPrevCover}></div>
      </div>
      <div
        onClick={() => {
          setPage(Math.ceil(miguelito.length/5 - 1))
        }}
        className={classes.BtnNext}
      >
        <div className={classes.LBar}></div>
        <div className={classes.BtnPrevCover}></div>
      </div></> )
          }
      </TableCell>
    </TableRow>
  </TableFooter>
  )
}
FooterTabel.propTypes={
  miguelito :PropTypes.array,
  page :PropTypes.number,
  setPage :PropTypes.func
}

export default FooterTabel
