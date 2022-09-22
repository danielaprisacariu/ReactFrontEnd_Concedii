import React from 'react'
import { PropTypes } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Styles from './Styles'

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

DatePickersCustomComponent.propTypes = { onChange: PropTypes.func, propertyName: PropTypes.string, data: PropTypes.string }
