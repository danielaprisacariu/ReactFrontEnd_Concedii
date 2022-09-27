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
  const { onChange, state, department, fct, onHistoryClick } = props

  return (
    <Grid container>
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
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('LastName', event.target.value)}></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('FirstName', event.target.value)}></TextField>
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
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('NIC', event.target.value)}></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField className={classes.halfbox} variant='outlined' onChange={event => onChange('Series', event.target.value)}></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classes.halfbox}
            variant='outlined'
            onChange={event => onChange('CardNumber', event.target.value)}
          ></TextField>
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
            propertyName='DateOfBirth'
            data={state.DateOfBirth}
          ></DateCustomComponent>
        </Grid>
        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('Email', event.target.value)}></TextField>
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
            propertyName='DateOfEmployment'
            data={state.DateOfEmployment}
          ></DateCustomComponent>
        </Grid>
        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('PhoneNumber', event.target.value)}></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.Function')}</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>{t('NewEmployeeTranslations.Department')}</div>
        </Grid>

        <Grid item xs={6}>
          <NewEmployeeCombobox arrayDataSource={fct} onChange={onChange} propertyName='Function' id={state.Function}></NewEmployeeCombobox>
        </Grid>
        <Grid item xs={6}>
          <NewEmployeeCombobox
            arrayDataSource={department}
            onChange={onChange}
            propertyName='Departament'
            id={state.Department}
          ></NewEmployeeCombobox>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.label}>{t('NewEmployeeTranslations.Password')}</div>
        </Grid>
        <Grid item xs={12}>
          <TextField className={classes.box} variant='outlined' onChange={event => onChange('Password', event.target.value)}></TextField>
        </Grid>

        <Grid item xs={12}>
          <Button className={classes.savebtn} onClick={onHistoryClick}>
            <SaveIcon> </SaveIcon>
            {t('NewEmployeeTranslations.SaveEmployee')}
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}

NewEmployeeComponent.propTypes = {
  fct: PropTypes.array.isRequired,
  department: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onHistoryClick: PropTypes.func,
  state: PropTypes.object
}

export default NewEmployeeComponent
