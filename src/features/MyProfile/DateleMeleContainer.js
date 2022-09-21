import React, { Fragment, useReducer } from 'react'

import { CardMedia, makeStyles } from '@material-ui/core'
import DateleMeleStyles from './DateleMeleStyles'
import { Typography, Grid, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { TextFieldReadOnly } from './TextFieldReadOnly'
import { FieldTextEditabil } from './FieldTextEditabil'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import MyProfileReducer from './MyProfileReducer'

const useStyles = makeStyles(DateleMeleStyles)

function DateleMeleContainer() {
  const classes = useStyles()

  const initialState = {
    id: 1,
    poza: './images/Natalia_Dyer_by_Gage_Skidmore.jpg',
    nume: 'Mitrut',
    prenume: 'Elena',
    cnp: ' 6010505407459',
    serie: 'RK',
    numar: '218754',
    dataNastere: '05/05/2001',
    email: 'elena.mitrut@totalsoft.ro',
    telefon: '0770976542',
    functie: 'manager',
    departament: 'dezvoltare',
    dataAngajare: '08/22/2022'
  }

  const [state, dispatch] = useReducer(MyProfileReducer, initialState)

  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
  }
  console.log(state)
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
          <div className={classes.pozaField}>
            <CardMedia className={classes.imagine} component='img' image={state.poza} alt='imagine'></CardMedia>
            <Button className={classes.schimbaPoza}>
              <EditIcon> </EditIcon>
            </Button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> NUME </div>
          <TextFieldReadOnly dataPersonala={state.nume}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> PRENUME </div>
          <TextFieldReadOnly dataPersonala={state.prenume}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> CNP</div>
          <TextFieldReadOnly dataPersonala={state.cnp}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> SERIE</div>
          <TextFieldReadOnly dataPersonala={state.serie}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> NUMAR</div>
          <TextFieldReadOnly dataPersonala={state.numar}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}>DATA NASTERE </div>
          <TextFieldReadOnly dataPersonala={state.dataNastere}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> EMAIL</div>
          <TextFieldReadOnly dataPersonala={state.email}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> TELEFON </div>
          <FieldTextEditabil angajat={state} onChange={onPropertyChange}>
            {' '}
          </FieldTextEditabil>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> FUNCTIE </div>
          <TextFieldReadOnly dataPersonala={state.functie}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> DEPARTAMENT</div>
          <TextFieldReadOnly dataPersonala={state.departament}> </TextFieldReadOnly>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}> DATA ANGAJARE</div>
          <TextFieldReadOnly dataPersonala={state.dataAngajare}> </TextFieldReadOnly>
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

const angajat = {
  id: 1,
  poza: './images/Natalia_Dyer_by_Gage_Skidmore.jpg',
  nume: 'Mitrut',
  prenume: 'Elena',
  cnp: ' 6010505407459',
  serie: 'RK',
  numar: '218754',
  dataNastere: '05/05/2001',
  email: 'elena.mitrut@totalsoft.ro',
  telefon: '0770976542',
  functie: 'manager',
  departament: 'dezvoltare',
  dataAngajare: '08/22/2022'
}
