import React, { Fragment, useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Styles from './Styles'

const useStyles = makeStyles(Styles)

export function DatePickersCustomComponent() {
  const classes = useStyles()
  const [state, setState] = useState(new Date())
  const handleChange = event => {
    setState(event.target.value)
  }
  return (
    <form className={classes.container} noValidate>
      <TextField
        id='state'
        label=''
        type='date'
        value={state}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={handleChange}
      />
    </form>
  )
}
