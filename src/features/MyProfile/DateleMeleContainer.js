import React, { createRef, Fragment, useReducer, useRef } from 'react'

import { CardMedia, IconButton, Input, makeStyles } from '@material-ui/core'
import DateleMeleStyles from './DateleMeleStyles'
import { Typography, Grid, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { TextFieldReadOnly } from './TextFieldReadOnly'
import { FieldTextEditabil } from './FieldTextEditabil'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import { MyProfileReducer, initialState } from './MyProfileReducer'
import { Edit } from '@material-ui/icons'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
const useStyles = makeStyles(DateleMeleStyles)

function DateleMeleContainer() {
  const classes = useStyles()

  const [state, dispatch] = useReducer(MyProfileReducer, initialState)

  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
  }

  const inputFile = createRef()
  var showFileUpload

  function handleUploadClick() {
    inputFile.current.click()
  }
  function openFiles() {
    console.log('Forta steaua')
    inputFile.current.click()
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
            {/* 
            <EditIcon onClick={openFiles}>
              <input
                className={classes.schimbaPoza}
                accept='image/*'
                id='contained-button-file'
                multiple
                type='file'
                ref={inputFile}
                onChange={handleUploadClick}
              />
            </EditIcon> */}

            {/* <input />
            {/* <Button
              className={classes.schimbaPoza}
              onClick={openFiles}
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
              ref={inputFile}
              onChange={handleUploadClick}
              icon={EditIcon}
            >
              Poza
            </Button> */}
            <input
              className={classes.schimbaPoza}
              onClick={openFiles}
              accept='image/*'
              id='contained-button-file'
              multiple
              type='file'
              ref={inputFile}
              onChange={handleUploadClick}
              icon={AddCircleOutlineIcon}
            />
            {/* <div className={classes.schimbaPoza}>
              <EditIcon
                onClick={openFiles}
                accept='image/*'
                id='contained-button-file'
                multiple
                type='file'
                ref={inputFile}
                onChange={handleUploadClick}
              ></EditIcon>
            </div> */}
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
          <FieldTextEditabil angajat={state} onChange={onPropertyChange} propertyName='telefon' telefon={state.telefon}></FieldTextEditabil>
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
