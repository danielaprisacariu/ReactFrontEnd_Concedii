import React from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import appStyle from './NewEmployeeStyle'
import { DateCustomComponent } from './DateCustomComponent'
import { NewEmployeeCombobox } from './NewEmployeeCombobox'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import SaveIcon from '@material-ui/icons/Save'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(appStyle)
function NewEmployeeComponent(props) {
  const classes = useStyles()
  const { t } = useTranslation()
  const { onChange, state, onHandleSave, onHistoryClick } = props

  return (
    <Grid container className={classes.containerS}>
      <Grid item xs={12}>
        <h1 className={classes.Title}>{t('NewEmployeeTranslations.AddNewEmployee')} </h1>
      </Grid>
      <div className={classes.pag}>
        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.LastName')}</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.FirstName')}</div>
        </Grid>
        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('nume', event.target.value)}></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('prenume', event.target.value)}></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.NationalIdentityCard')}</div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.label}>{t('NewEmployeeTranslations.IdentityCardSeries')}</div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.label}>{t('NewEmployeeTranslations.IdentityCardNumber')}</div>
        </Grid>

        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('cnp', event.target.value)}></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField className={classes.halfbox} variant='outlined' onChange={event => onChange('serie', event.target.value)}></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField className={classes.halfbox} variant='outlined' onChange={event => onChange('no', event.target.value)}></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.DateofBirth')}</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.Email')}</div>
        </Grid>

        <Grid item xs={6}>
          <DateCustomComponent
            className={classes.date}
            onChange={onChange}
            propertyName='dataNasterii'
            data={state.dataNasterii}
          ></DateCustomComponent>
        </Grid>
        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('email', event.target.value)}></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.DateofEmployment')}</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.PhoneNumber')}</div>
        </Grid>

        <Grid item xs={6}>
          <DateCustomComponent
            className={classes.date}
            onChange={onChange}
            propertyName='dataAngajare'
            data={state.dataAngajare}
          ></DateCustomComponent>
        </Grid>
        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('nrTelefon', event.target.value)}></TextField>
        </Grid>

        {/* <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.Function')}</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.Department')}</div>
        </Grid> */}

        {/* <Grid item xs={6}>
          <NewEmployeeCombobox
            arrayDataSource={state.functii}
            onChange={onChange}
            propertyName='functieId'
            id={state.functieId}
          ></NewEmployeeCombobox>
        </Grid> */}
        {/* <Grid item xs={6}>
          <NewEmployeeCombobox
            arrayDataSource={state.departamente}
            onChange={onChange}
            propertyName='departamentId'
            id={state.departamentId}
          ></NewEmployeeCombobox>
        </Grid> */}

        <Grid item xs={12}>
          <div className={classes.label}>{t('NewEmployeeTranslations.Password')}</div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.box}
            variant='outlined'
            type='password'
            onChange={event => onChange('parola', event.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <Button className={classes.savebtn} onClick={onHandleSave}>
            <SaveIcon> </SaveIcon>
            {t('NewEmployeeTranslations.SaveEmployee')}
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}

NewEmployeeComponent.propTypes = {
  // functii: PropTypes.array,
  // departamente: PropTypes.array,
  onChange: PropTypes.func,
  onHistoryClick: PropTypes.func,
  state: PropTypes.object,
  onHandleSave: PropTypes.func
}

export default NewEmployeeComponent
