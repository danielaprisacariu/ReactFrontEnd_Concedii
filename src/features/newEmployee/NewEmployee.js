import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

function NewEmployee() {
  const addToast = useToast()
  addToast('Welcome', 'success')
  return (
    'Aci bagi tu tot ce anseamna new employee'
  )
}

export default NewEmployee
