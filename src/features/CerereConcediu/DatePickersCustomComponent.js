import React, { Fragment, useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { PropTypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Styles from './Styles'
import Moment from 'moment'

const useStyles = makeStyles(Styles)

export function DatePickersCustomComponent(props) {
  const { onChange, propertyName, data } = props
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate>
      <TextField
        id='state'
        label=''
        type='date'
        defaultValue={data}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={event => onChange(propertyName, event.target.value)}
      />
    </form>
  )
}

DatePickersCustomComponent.propTypes = { onChange: PropTypes.func, propertyName: PropTypes.string, data: PropTypes.Date }
