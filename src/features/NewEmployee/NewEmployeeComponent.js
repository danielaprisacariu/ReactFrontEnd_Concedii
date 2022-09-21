import React, { Fragment } from 'react'
import { Typography, Grid, Button, TextField } from '@material-ui/core'
import appStyle from './NewEmployeeStyle'
import { DateCustomComponent } from './DateCustomComponent'
import { NewEmployeeCombobox } from './NewEmployeeCombobox'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import SaveIcon from '@material-ui/icons/Save'
import { CustomTextField } from './CustomTextField'

const useStyles = makeStyles(appStyle)
function NewEmployeeComponent(props) {
  const { fct } = props
  const { department } = props
  const classes = useStyles()
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
          <TextField variant='outlined'> </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField variant='outlined'></TextField>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.label}>National Identity Card</div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}>Identity Card Series</div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.label}>Identity Card Number</div>
        </Grid>

        <Grid item xs={4}>
          <TextField variant='outlined'></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined'></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField variant='outlined'></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>Date of Employment</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>Phone Number</div>
        </Grid>

        <Grid item xs={6}>
          <DateCustomComponent className={classes.data}> </DateCustomComponent>
        </Grid>
        <Grid item xs={6}>
          <TextField variant='outlined'></TextField>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.label}>Functie</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.label}>Departament</div>
        </Grid>

        <Grid item xs={6}>
          <NewEmployeeCombobox arrayDataSource={fct}> </NewEmployeeCombobox>
        </Grid>
        <Grid item xs={6}>
          <NewEmployeeCombobox arrayDataSource={department}> </NewEmployeeCombobox>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.label}>Comments</div>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField className={classes.bigbox}></CustomTextField>
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
