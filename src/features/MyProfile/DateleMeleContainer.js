import React, { Fragment, useReducer, useRef } from 'react'

import { CardMedia, IconButton, Input, makeStyles } from '@material-ui/core'
import DateleMeleStyles from './DateleMeleStyles'
import { Typography, Grid, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { TextFieldReadOnly } from './TextFieldReadOnly'
import { FieldTextEditabil } from './FieldTextEditabil'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import MyProfileReducer from './MyProfileReducer'
import { Edit } from '@material-ui/icons'

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

  const inputFile = useRef(null)
  function handleUploadClick() {
    inputFile.current.click()
  }
  function openFiles() {
    console.log('Forta steaua')
    return (
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
        ref={inputFile}
        onChange={handleUploadClick}
      />
    )
  }

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
        <Grid item xs={12} sm={4}>
          <div className={classes.label}> POZA </div>
          <div className={classes.pozaField}>
            <CardMedia className={classes.imagine} component='img' image={state.poza} alt='imagine'></CardMedia>

            <input />
            <IconButton
              className={classes.schimbaPoza}
              onClick={openFiles}
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
              ref={inputFile}
              onChange={handleUploadClick}
              icon={EditIcon}
            ></IconButton>
            <EditIcon onClick={openFiles}></EditIcon>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> NUME </div>
          <TextFieldReadOnly dataPersonala={state.nume}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> PRENUME </div>
          <TextFieldReadOnly dataPersonala={state.prenume}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> CNP</div>
          <TextFieldReadOnly dataPersonala={state.cnp}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> SERIE</div>
          <TextFieldReadOnly dataPersonala={state.serie}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> NUMAR</div>
          <TextFieldReadOnly dataPersonala={state.numar}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>DATA NASTERE </div>
          <TextFieldReadOnly dataPersonala={state.dataNastere}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> EMAIL</div>
          <TextFieldReadOnly dataPersonala={state.email}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> TELEFON </div>
          <FieldTextEditabil angajat={state} onChange={onPropertyChange} propertyName='telefon'></FieldTextEditabil>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> FUNCTIE </div>
          <TextFieldReadOnly dataPersonala={state.functie}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> DEPARTAMENT</div>
          <TextFieldReadOnly dataPersonala={state.departament}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> DATA ANGAJARE</div>
          <TextFieldReadOnly dataPersonala={state.dataAngajare}></TextFieldReadOnly>
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
