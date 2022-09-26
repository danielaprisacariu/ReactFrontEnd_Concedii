import React from 'react'
import { Button, CardMedia, Grid, makeStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DateleMeleStyles from './DateleMeleStyles'
import EditIcon from '@material-ui/icons/Edit'
import { PropTypes } from 'prop-types'
import { TextFieldReadOnly } from './TextFieldReadOnly'
import { FieldTextEditabil } from './FieldTextEditabil'
import SaveIcon from '@material-ui/icons/Save'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(DateleMeleStyles)

function DateleMeleCard({ state, onChange, handleUploadClick }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid container>
      <div className={classes.DA}>
        <Grid item xs={12}>
          <Button>
            <ArrowBackIcon> </ArrowBackIcon>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1 className={classes.h1}> {t('EmployeeDetailsTranslations.EmployeeDetails')}</h1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.label}> {t('EmployeeDetailsTranslations.Image')} </div>
          <div className={classes.pozaField}>
            <CardMedia
              className={classes.imagine}
              component='img'
              image={state.poza}
              alt='imagine'
              onChange={event => onChange('poza', event.target.value)}
            ></CardMedia>
            <Button variant='contained' component='label' className={classes.schimbaPoza}>
              <EditIcon></EditIcon>
              <input accept='image/*' type='file' onChange={event => onChange('poza', './images/' + event.target.files[0].name)} hidden />
              {/*  */}
              {/* console.log(event.target.files[0]) */}
            </Button>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> {t('EmployeeDetailsTranslations.LastName')}</div>
          <TextFieldReadOnly dataPersonala={state.nume}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}> {t('EmployeeDetailsTranslations.FirstName')}</div>
          <TextFieldReadOnly dataPersonala={state.prenume}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.CNP')}</div>
          <TextFieldReadOnly dataPersonala={state.cnp}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.Series')}</div>
          <TextFieldReadOnly dataPersonala={state.serie}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.CardNumber')}</div>
          <TextFieldReadOnly dataPersonala={state.numar}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.DateOfBirth')}</div>
          <TextFieldReadOnly dataPersonala={state.dataNastere}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.Email')}</div>
          <TextFieldReadOnly dataPersonala={state.email}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.PhoneNumber')}</div>
          <FieldTextEditabil angajat={state} onChange={onChange} propertyName='telefon' telefon={state.telefon}></FieldTextEditabil>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.Function')}</div>
          <TextFieldReadOnly dataPersonala={state.functie}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.Department')}</div>
          <TextFieldReadOnly dataPersonala={state.departament}></TextFieldReadOnly>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.label}>{t('EmployeeDetailsTranslations.DateOfEmployment')}</div>
          <TextFieldReadOnly dataPersonala={state.dataAngajare}></TextFieldReadOnly>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.butonActualizare}>
            <SaveIcon> </SaveIcon>
            {t('EmployeeDetailsTranslations.Update')}
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
