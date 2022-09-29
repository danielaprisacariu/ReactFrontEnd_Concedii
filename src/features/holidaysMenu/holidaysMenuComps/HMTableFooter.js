import { React, Fragment, useState } from 'react'
import { TableFooter, TableRow, TableCell, makeStyles,Select,MenuItem,Checkbox,ListItemText } from '@material-ui/core'
import HolidaysMenuStyle from '../HolidaysMenuStyle'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
const useStyles = makeStyles(HolidaysMenuStyle)

function HMTableFooter(props) {
  const { page, setPage, rows, rowsOnPage,RopVals,RopVal,handleRopValChange } = props
  const classes = useStyles()
  const {t}=useTranslation()


 
  return (
    <TableFooter className={classes.Header}>
      <TableRow className={classes.TableRow}>
        <TableCell className={(classes.Cell, classes)}></TableCell>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={classes.Cell,classes.Clabel}>{t('Footer.RanduriPePagina')} </TableCell>
        <TableCell className={classes.Cell,classes.CRV}><Select defaultValue={5} className={classes.Select} value={RopVal} onChange={handleRopValChange}>
             {RopVals?.map((name) => (<MenuItem  key={name} value={name}> {name}
              </MenuItem>))}
              </Select></TableCell>
        <TableCell className={(classes.Cell, classes.CF)}>
          
          {page !== 0 && (
            <>
          
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
            </>
          )}

          {page !== Math.ceil(rows?.length / rowsOnPage)-1 && (
            <>
              <div
                onClick={() => {
                  setPage(page + 1)
                }}
                className={classes.BtnNext}
              >
                <div className={classes.BtnPrevCover}></div>
              </div>
              <div
                onClick={() => {
                  setPage(Math.ceil(rows?.length / rowsOnPage) -  1)
                }}
                className={classes.BtnNext}
              >
                <div className={classes.LBar}></div>
                <div className={classes.BtnPrevCover}></div>
              </div>
            </>
          )}
        </TableCell>
      </TableRow>
    </TableFooter>
  )
}

HMTableFooter.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  rows: PropTypes.array,
  rowsOnPage: PropTypes.number,
  RopVals: PropTypes.array,
  RopVal: PropTypes.number,
  handleRopValChange:PropTypes.func
}
export default HMTableFooter
