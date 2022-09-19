import React, { Fragment} from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import {DatePickers} from './DatePickerCard'



function CerereConcediu() {
    const addToast = useToast()
    addToast('Welcome', 'success')
    return (
      <Fragment>
        <Typography></Typography>
        <DatePickers> </DatePickers>
        <DatePickers> </DatePickers>
       
        <Grid></Grid>
      </Fragment>
    )
  }
  
export default CerereConcediu
