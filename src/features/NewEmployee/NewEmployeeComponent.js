import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import appStyle from './NewEmployeeStyle';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(appStyle)
function NewEmployeeComponent() {
    const addToast = useToast()
    addToast('Welcome', 'success')
    const classes = useStyles();
    return (<Fragment>
      <Typography>
      <h1 className={classes.Title}> Add New Employee </h1>
      </Typography>
     </Fragment>
     
    )
  }
  
  export default NewEmployeeComponent

