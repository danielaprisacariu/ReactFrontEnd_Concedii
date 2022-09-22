import React, { Fragment } from 'react'
import { TableCell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableRow from '@material-ui/core/TableRow'
import { TableFooter, Select, MenuItem } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(ToateConcediileStyle)

function FooterTabel(props) {
  const { miguelito, page, setPage, RopVal, RopVals, handleRopValChange } = props
  const classes = useStyles()
  const {t}=useTranslation()
  return (
    <TableFooter className={classes.Footer}>
      <TableRow className={classes.Rows}>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={classes.Cell}></TableCell>
        <TableCell className={classes.CText}>{t('Footer.RanduriPePagina')}</TableCell>
        <TableCell className={classes.Cell, classes.CBox}>
          <Select defaultValue ={5} value={RopVal} onChange={handleRopValChange} className ={classes.Selects}>
            {RopVals?.map(name => (
              <MenuItem key={name} value={name}>
                {' '}
                {name}
              </MenuItem>
            ))}
          </Select>
        </TableCell>
        <TableCell className={(classes.Cell, classes.CF)}>
          {page !== 0 && (
            <>
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
            </>
          )}
          {page !== Math.ceil(miguelito.length / RopVal) - 1 && (
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
                  setPage(Math.ceil(miguelito.length / RopVal) - 1)
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
FooterTabel.propTypes = {
  miguelito: PropTypes.array,
  page: PropTypes.number,
  setPage: PropTypes.func,
  RopVal: PropTypes.number,
  RopVals: PropTypes.array,
  handleRopValChange: PropTypes.func
}

export default FooterTabel
