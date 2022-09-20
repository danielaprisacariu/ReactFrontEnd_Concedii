import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Styles from './Styles'

const useStyles = makeStyles(Styles)

export function DatePickersCustomComponent() {
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate>
      <TextField
        id='date'
        label=''
        type='date'
        defaultValue='2017-05-24'
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  )
}
