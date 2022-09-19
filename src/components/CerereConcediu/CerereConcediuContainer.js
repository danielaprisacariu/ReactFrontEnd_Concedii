import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { DatePickers } from './DatePickerCard'
import '../../features/allCSS/CerereConcediuContainerCSS.css'

function CerereConcediu() {
  const addToast = useToast()
  addToast('Welcome', 'success')
  return (
    <Fragment>
      <Typography></Typography>
      <h1> Adauga concediu </h1>
      <div className='DA'>
        <DatePickers> </DatePickers>

        <DatePickers> </DatePickers>
      </div>
      <Grid></Grid>
    </Fragment>
  )
}

export default CerereConcediu
