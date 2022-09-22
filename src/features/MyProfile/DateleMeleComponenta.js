import React from 'react'
import { Button, CardMedia, Grid, makeStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DateleMeleStyles from './DateleMeleStyles'
import EditIcon from '@material-ui/icons/Edit'
import { PropTypes } from 'prop-types'
import { TextFieldReadOnly } from './TextFieldReadOnly'
import { FieldTextEditabil } from './FieldTextEditabil'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles(DateleMeleStyles)

function DateleMeleCard({ state, onChange, handleUploadClick }) {
  const classes = useStyles()

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
            <Button variant='contained' component='label' className={classes.schimbaPoza}>
              <EditIcon></EditIcon>
              <input accept='image/*' type='file' onChange={handleUploadClick} hidden />
            </Button>
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
          <FieldTextEditabil angajat={state} onChange={onChange} propertyName='telefon' telefon={state.telefon}></FieldTextEditabil>
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

DateleMeleCard.propTypes = {
  state: PropTypes.object,
  onChange: PropTypes.func,
  handleUploadClick: PropTypes.func
}

export default DateleMeleCard
