import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import Style from './NewEmployeeStyle';
import { makeStyles } from '@material-ui/core'
import NewEmployeeComponent from './NewEmployeeComponent'
import PropTypes from 'prop-types'


export default function NewEmployeeCard(props) {
  const { fct } = props
  const { department } = props

  return (
     <>
      <NewEmployeeComponent fct={fct} department={department}></NewEmployeeComponent>
      </>  
  )
  }
  NewEmployeeCard.propTypes = { fct: PropTypes.array.isRequired, department: PropTypes.array.isRequired }
  