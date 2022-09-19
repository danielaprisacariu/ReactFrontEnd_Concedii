import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { DatePickersCustomComponent } from './DatePickersCustomComponent'
import { makeStyles } from '@material-ui/core'
import Styles from './Styles'

import PropTypes from 'prop-types'

const useStyles = makeStyles(Styles)

function CerereConcediuComponenta(props) {
  const { tipuriConcedii } = props
  const addToast = useToast()
  const classes = useStyles()
  addToast('Welcome', 'success')
  return (
    <Grid container>
      <Typography></Typography>

      <Grid item xs={12}>
        <h1 className={classes.h1}> Adauga concediu </h1>
      </Grid>
      <div className={classes.DA}>
        <Grid item xs={6}>
          <div className={classes.span}> DATA INCEPUT </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.span}> DATA SFARSIT</div>
        </Grid>
        <Grid item xs={6}>
          <DatePickersCustomComponent className={classes.data}> </DatePickersCustomComponent>
        </Grid>
        <Grid item xs={6}>
          <DatePickersCustomComponent className={classes.data}> </DatePickersCustomComponent>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.span1}> TOTAL ZILE LIBERE SOLICITATE </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.span1}>ZILE LIBERE DISPONIBILE</div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.box}> 6 ZILE </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.box}>17 ZILE</div>
        </Grid>
      </div>
    </Grid>
  )
}

CerereConcediuComponenta.propTypes = { tipuriConcedii: PropTypes.array.isRequired }

export default CerereConcediuComponenta
