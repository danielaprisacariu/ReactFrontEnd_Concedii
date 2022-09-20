import React, { Fragment } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { DatePickersCustomComponent } from './DatePickersCustomComponent'
import { ComboBoxComponenta } from './ComboBoxComponenta'
import { makeStyles } from '@material-ui/core'
import Styles from './Styles'
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
          <div className={classes.box}></div>
          <div className={classes.span2}> 6 zile </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.box}></div>
          <div className={classes.span2}>17 zile </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.span3}>TIP CONCEDIU</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.span3}>INLOCUITOR</div>
        </Grid>

        <Grid item xs={6}>
          <ComboBoxComponenta arrayDataSource={tipuriConcedii}> </ComboBoxComponenta>
        </Grid>

        <Grid item xs={6}>
          <ComboBoxComponenta arrayDataSource={inlocuitori}> </ComboBoxComponenta>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.span1}> COMENTARII</div>
        </Grid>

        <Grid item xs={12}>
          <ComentariiTextField> </ComentariiTextField>
        </Grid>

        <Grid item xs={8}>
          <Button className={classes.butonAdauga}>
            <AttachFileIcon> </AttachFileIcon> ADAUGA FISIERE
          </Button>
        </Grid>

        <Grid item xs={4}>
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
