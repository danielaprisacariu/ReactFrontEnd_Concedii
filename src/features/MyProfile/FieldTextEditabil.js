import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import DateleMeleStyles from './DateleMeleStyles'

const useStyles = makeStyles(DateleMeleStyles)

export function FieldTextEditabil() {
  const classes = useStyles()
  return <TextField className={classes.root} id='outline-helperText' label='Editable' defaultValue='Hello World' variant='outlined' />
}
