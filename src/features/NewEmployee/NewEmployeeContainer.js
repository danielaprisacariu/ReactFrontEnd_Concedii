import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import '../../features/NewEmployee/NewEmployeeCSS.css'

function NewEmployee() {
    const addToast = useToast()
    addToast('Welcome', 'success')
    return (<Fragment>
      <Typography>
      <h1> Add New Employee </h1>
      </Typography>
     </Fragment>
     
    )
  }
  
  export default NewEmployee
  