import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Styles from './Styles.js'
import { PropTypes } from 'prop-types'

const useStyles = makeStyles(Styles)

export function ComentariiTextField(props) {
  const { onChange, propertyName, comentariu } = props
  const classes = useStyles()

  return (
    <TextField
      className={classes.comentariiTextField}
      multiline
      rows={5}
      value={comentariu}
      variant='outlined'
      onChange={event => onChange(propertyName, event.target.value)}
    />
  )
}

ComentariiTextField.propTypes = {
  onChange: PropTypes.func,
  propertyName: PropTypes.string,
  comentariu: PropTypes.string
}
