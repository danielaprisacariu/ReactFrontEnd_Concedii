import { React, Fragment, useState } from 'react'
import { TableFooter, TableRow, TableCell, makeStyles } from '@material-ui/core'
import HolidaysMenuStyle from '../HolidaysMenuStyle'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles(HolidaysMenuStyle)

function HMTableFooter(props) {
    const {page, setPage, rows,rowsOnPage}=props
  const classes = useStyles()
  return (
    <TableFooter className={classes.Header}>
      <TableRow className={classes.TableRow}>
        <TableCell className={(classes.Cell, classes)}></TableCell>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={(classes.Cell, classes.CF)}>
            {page !==1 && (<>  <div
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
          {page!==rows.length/rowsOnPage &&(<><div
        onClick={() => {
          setPage(page + 1)
        }}
        className={classes.BtnNext}
      >
        <div className={classes.BtnPrevCover}></div>
      </div>
      <div
        onClick={() => {
          setPage(rows.length - 1)
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
// BackButtons.propTypes = {
//   page: PropTypes.object,
//   setPage: PropTypes.object
// }
// FrontButtons.propTypes = {
//   page: PropTypes.object,
//   setPage: PropTypes.setStateAction,
//   rows: PropTypes.array
// }
HMTableFooter.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  rows: PropTypes.array,
  rowsOnPage: PropTypes.number
}
export default HMTableFooter
