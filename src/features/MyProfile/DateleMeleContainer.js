import React, { Fragment } from 'react'

import { makeStyles } from '@material-ui/core'
import DateleMeleStyles from './DateleMeleStyles'
import { Typography, Grid, Button } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { TextFieldReadOnly } from './TextFieldReadOnly'
import { FieldTextEditabil } from './FieldTextEditabil'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles(DateleMeleStyles)
function DateleMeleContainer() {
  const addToast = useToast()
  const classes = useStyles()
  addToast('Welcome', 'success')
  return (
    <Grid container>
      <div className={classes.DA}>
        <Grid item xs={12}>
          <Button>
            <ArrowBackIcon> </ArrowBackIcon>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1 className={classes.h1}> Detalii Angajat </h1>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> POZA </div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> NUME </div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> PRENUME </div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> CNP</div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> SERIE</div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> NUMAR</div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}>DATA NASTERE </div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> EMAIL</div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> TELEFON </div>
          <FieldTextEditabil> </FieldTextEditabil>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> FUNCTIE </div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> DEPARTAMENT</div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> DATA ANGAJARE</div>
          <TextFieldReadOnly> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.butonActualizare}>
            <SaveIcon> </SaveIcon>
            ACTUALIZARE
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}

export default DateleMeleContainer
