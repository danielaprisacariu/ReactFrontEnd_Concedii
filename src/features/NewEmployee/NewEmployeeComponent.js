import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import appStyle from './NewEmployeeStyle';
import { DateCustomComponent } from './DateCustomComponent'
import { NewEmployeeCombobox } from './NewEmployeeCombobox'
import { makeStyles } from '@material-ui/core'
import Style from './NewEmployeeStyle'
import PropTypes from 'prop-types'


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
          <div className={classes.lable}> Last Name </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.lable}>First Name</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.box}> test </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.box}>test</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.lable}>Identity Card Number</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.lable}>Date of Employment</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.box}> test id </div>
        </Grid>
        <Grid>
           <DateCustomComponent className={classes.data}> </DateCustomComponent>
        </Grid>   
        <Grid item xs={6}>
          <div className={classes.lable}>Functie</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.lable}>Departament</div>
        </Grid>
        <Grid item xs={6}>
          <NewEmployeeCombobox arrayDataSource={fct}> </NewEmployeeCombobox>
        </Grid>

        <Grid item xs={6}>
          <NewEmployeeCombobox arrayDataSource={department}> </NewEmployeeCombobox>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.lable}>Comments</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.bigbox}> test comment </div>
        </Grid>
        </div>
     </Grid>
     
    )
  }
  
  NewEmployeeComponent.propTypes = { fct: PropTypes.array.isRequired, department: PropTypes.array.isRequired }

  export default NewEmployeeComponent

