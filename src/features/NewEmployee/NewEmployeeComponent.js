import React, { Fragment, useReducer } from 'react'
import { Typography, Grid, Button, TextField } from '@material-ui/core'
import appStyle from './NewEmployeeStyle'
import { DateCustomComponent } from './DateCustomComponent'
import { NewEmployeeCombobox } from './NewEmployeeCombobox'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import SaveIcon from '@material-ui/icons/Save'
import { CustomTextField } from './CustomTextField'
import { OnPropertyChanged, reducer, initialState } from './NewEmployeeState'

const useStyles = makeStyles(appStyle)
function NewEmployeeComponent(props) {
  const { fct } = props
  const { department } = props
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChanged', propertyName, value })
  }
  return (
    <Grid container>
      <Typography></Typography>
      <Grid item xs={12}>
        <h1 className={classes.Title}> Add New Employee </h1>
      </Grid>
      <div className={classes.pag}>
        <Grid item xs={6}>
          <div className={classes.label}>Last Name</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>First Name</div>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.box}
            variant='outlined'
            onChange={event => handleChange('LastName', event.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.box}
            variant='outlined'
            onChange={event => handleChange('FirstName', event.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>National Identity Card</div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.label}>Identity Card Series</div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.label}>Identity Card Number</div>
        </Grid>

        <Grid item xs={6}>
          <TextField className={classes.box} variant='outlined' onChange={event => handleChange('NIC', event.target.value)}></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classes.halfbox}
            variant='outlined'
            onChange={event => handleChange('Series', event.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classes.halfbox}
            variant='outlined'
            onChange={event => handleChange('CardNumber', event.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>Date of Employment</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>Phone Number</div>
        </Grid>

        <Grid item xs={6}>
          <DateCustomComponent
            className={classes.data}
            onChange={event => handleChange('DateOfEmployment', event.target.value)}
          ></DateCustomComponent>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.box}
            variant='outlined'
            onChange={event => handleChange('PhoneNumber', event.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>Function</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>Departament</div>
        </Grid>

        <Grid item xs={6}>
          <NewEmployeeCombobox
            arrayDataSource={fct}
            onChange={handleChange}
            propertyName='Function'
            id={state.Function}
          ></NewEmployeeCombobox>
        </Grid>
        <Grid item xs={6}>
          <NewEmployeeCombobox
            arrayDataSource={department}
            onChange={handleChange}
            propertyName='Departament'
            id={state.Department}
          ></NewEmployeeCombobox>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.label}>Comments</div>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField className={classes.bigbox} onChange={event => handleChange('Comments', event.target.value)}></CustomTextField>
        </Grid>

        <Grid item xs={12}>
          <Button className={classes.savebtn}>
            <SaveIcon> </SaveIcon>
            Save Employee
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}

NewEmployeeComponent.propTypes = { fct: PropTypes.array.isRequired, department: PropTypes.array.isRequired }

export default NewEmployeeComponent
