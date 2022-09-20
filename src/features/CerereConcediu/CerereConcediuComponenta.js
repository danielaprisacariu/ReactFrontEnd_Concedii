import React, { Fragment } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { DatePickersCustomComponent } from './DatePickersCustomComponent'
import { ComboBoxComponenta } from './ComboBoxComponenta'
import { makeStyles } from '@material-ui/core'
import Styles from './Styles.js'
import { ComentariiTextField } from './ComentariiTextField'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import SaveIcon from '@material-ui/icons/Save'

import PropTypes from 'prop-types'

const useStyles = makeStyles(Styles)

function CerereConcediuComponenta(props) {
  const { tipuriConcedii } = props
  const { inlocuitori } = props

  const addToast = useToast()
  const classes = useStyles()
  addToast('Welcome', 'success')
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className={classes.h1}> Adauga concediu </h1>
      </Grid>

      <div className={classes.DA}>
        <Grid item md={6} xs={12}>
          <div className={classes.span}> DATA INCEPUT </div>
          <DatePickersCustomComponent className={classes.data}></DatePickersCustomComponent>
        </Grid>

        <Grid item md={6} xs={12}>
          <div className={classes.span}> DATA SFARSIT</div>
          <DatePickersCustomComponent className={classes.data}> </DatePickersCustomComponent>
        </Grid>

        <Grid item md={6} xs={12}>
          <div className={classes.span1}> TOTAL ZILE LIBERE SOLICITATE </div>
          <div className={classes.box}></div>
          <div className={classes.span2}> 6 zile </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.span1}>ZILE LIBERE DISPONIBILE</div>
          <div className={classes.box}></div>
          <div className={classes.span2}>17 zile </div>
        </Grid>

        <Grid item md={6} xs={12}>
          <div className={classes.span3}>TIP CONCEDIU</div>
          <ComboBoxComponenta arrayDataSource={tipuriConcedii}> </ComboBoxComponenta>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.span3}>INLOCUITOR</div>
          <ComboBoxComponenta arrayDataSource={inlocuitori}> </ComboBoxComponenta>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.span1}> COMENTARII</div>
        </Grid>

        <Grid item xs={12}>
          <ComentariiTextField> </ComentariiTextField>
        </Grid>

        <Grid item xs={12}>
          <Button className={classes.butonSalveaza}>
            <SaveIcon> </SaveIcon>
            SALVEAZA
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}

CerereConcediuComponenta.propTypes = { tipuriConcedii: PropTypes.array.isRequired, inlocuitori: PropTypes.array.isRequired }

export default CerereConcediuComponenta
