import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import DateleMeleStyles from './DateleMeleStyles'
import PropTypes from 'prop-types'
const useStyles = makeStyles(DateleMeleStyles)

export function FieldTextEditabil(props) {
  const classes = useStyles()
  const { onChange, propertyName, telefon } = props

  return (
    <TextField
      className={classes.root}
      value={telefon}
      id='outline-helperText'
      label={propertyName}
      variant='outlined'
      onChange={event => onChange(propertyName, event.target.value)}
    />
  )
}

FieldTextEditabil.propTypes = {
  angajat: PropTypes.object,
  onChange: PropTypes.func,
  propertyName: PropTypes.string,
  telefon: PropTypes.string
}
