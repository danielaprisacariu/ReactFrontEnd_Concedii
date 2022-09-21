import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Styles from './Styles.js'

const useStyles = makeStyles(Styles)

export function ComentariiTextField() {
  const classes = useStyles()
  const [state, setState] = useState('')
  const handleChange = event => {
    setState(event.target.value)
    console.log(state)
  }
  return <TextField className={classes.comentariiTextField} multiline rows={5} variant='outlined' onChange={handleChange} />
}
