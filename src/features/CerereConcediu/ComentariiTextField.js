import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Styles from './Styles.js'

const useStyles = makeStyles(Styles)

export function ComentariiTextField() {
  const classes = useStyles()
  return <TextField className={classes.comentariiTextField} multiline rows={5} variant='outlined' />
}
