import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { PropTypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Style from './NewEmployeeStyle'

const useStyles = makeStyles(Style)
export function DateCustomComponent(props) {
  const { onChange, propertyName, data } = props
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate>
      <TextField
        id='date'
        label=''
        type='date'
        value={data}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={event => onChange(propertyName, event.target.value)}
      />
    </form>
  )
}

DateCustomComponent.propTypes = { onChange: PropTypes.func, propertyName: PropTypes.string, data: PropTypes.string }
