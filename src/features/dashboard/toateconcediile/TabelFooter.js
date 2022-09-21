import React, { Fragment, useState } from 'react'
import { TableCell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import totateConcediile from './ToateConcediile'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles(ToateConcediileStyle)


function BackButtons(props) {
  const{page,setPage} = props
  const classes = useStyles()
  return (
    <Fragment>
      {' '}
      <div
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
      </div>
    </Fragment>
  )
}
function FrontButtons(props) {
  const pagesOnRows =1 
  const{miguelito, page, setPage} = props

  const classes = useStyles()
  return (
    <Fragment>
      <div
        onClick={
          ( () => {
            setPage(page + pagesOnRows)
          })
        }
        className={classes.BtnNext}
      >
        <div className={classes.BtnPrevCover}></div>
      </div>
      <div
        onClick={
          ( () => {
            setPage(miguelito.length - 1)
          })
        }
        className={classes.BtnNext}
      >
        <div className={classes.LBar}></div>
        <div className={classes.BtnPrevCover}></div>
      </div>
    </Fragment>
  )
}

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
        <BackButtons  />
        <FrontButtons />
      </TableCell>
    </TableRow>
  </TableFooter>
  )
}

BackButtons.propTypes={
page :PropTypes.number,
setPage:PropTypes.func

}
FrontButtons.propTypes={
  miguelito :PropTypes.array,
  page :PropTypes.number,
  setPage :PropTypes.func
}
FooterTabel.propTypes={
  miguelito :PropTypes.array,
  page :PropTypes.number,
  setPage :PropTypes.func,
}

export default TableFooter
