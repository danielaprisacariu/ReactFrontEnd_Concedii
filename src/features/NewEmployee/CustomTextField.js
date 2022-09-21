import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Style from './NewEmployeeStyle'

const useStyles = makeStyles(Style)

export function CustomTextField() {
  const classes = useStyles()
  return <TextField className={classes.TextField} multiline rows={5} variant='outlined' />
}
