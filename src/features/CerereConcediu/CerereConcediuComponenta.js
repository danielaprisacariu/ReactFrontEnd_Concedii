import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { DatePickersCustomComponent } from './DatePickersCustomComponent'
import './CerereConcediuContainerCSS.css'
import PropTypes from 'prop-types'

function CerereConcediuComponenta(props) {
  const { tipuriConcedii } = props
  const addToast = useToast()
  addToast('Welcome', 'success')
  return (
    <Fragment>
      <Typography></Typography>
      <h1> Adauga concediu </h1>

      <div className='DA'>
        <div className='span'> DATA INCEPUT </div>
        <div className='span'> DATA SFARSIT</div>
        <DatePickersCustomComponent className='dataStart'> </DatePickersCustomComponent>

        <DatePickersCustomComponent> </DatePickersCustomComponent>
      </div>
      <Grid></Grid>
    </Fragment>
  )
}

CerereConcediuComponenta.propTypes = { tipuriConcedii: PropTypes.array.isRequired }

export default CerereConcediuComponenta
