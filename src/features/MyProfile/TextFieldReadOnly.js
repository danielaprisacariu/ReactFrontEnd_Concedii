import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import DateleMeleStyles from './DateleMeleStyles'

const useStyles = makeStyles(DateleMeleStyles)

export function TextFieldReadOnly() {
  const classes = useStyles()
  return (
    <TextField
      className={classes.root}
      id='standard-read-only-input'
      defaultValue='Hello World'
      InputProps={{
        readOnly: true
      }}
      variant='outlined'
    />
  )
}
