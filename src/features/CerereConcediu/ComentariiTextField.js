import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Styles from './Styles.js'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles(Styles)

export function ComentariiTextField(props) {
  const { onChange, propertyName } = props
  const classes = useStyles()
  // const [state, setState] = useState('')
  // const handleChange = event => {
  //   setState(event.target.value)
  //   console.log(state)
  // }
  return (
    <TextField
      className={classes.comentariiTextField}
      multiline
      rows={5}
      variant='outlined'
      onChange={event => onChange(propertyName, event.target.value)}
    />
  )
}

ComentariiTextField.propTypes = {
  onChange: PropTypes.func,
  propertyName: PropTypes.string
}
