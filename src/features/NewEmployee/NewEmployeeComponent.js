import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import appStyle from './NewEmployeeStyle';
import { DateCustomComponent } from './DateCustomComponent'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(appStyle)
function NewEmployeeComponent() {
    const addToast = useToast()
    addToast('Welcome', 'success')
    const classes = useStyles();
    return (
    <Grid container>
      <Typography></Typography>
        <Grid item xs={12}>
        <h1 className={classes.Title}> Add New Employee </h1>
        </Grid>
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
           <DateCustomComponent className={classes.data}> </DateCustomComponent>
     </Grid>
     
    )
  }
  
  export default NewEmployeeComponent

