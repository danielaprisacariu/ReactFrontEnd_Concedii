import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import DateleMeleStyles from './DateleMeleStyles'
import PropTypes from 'prop-types'
const useStyles = makeStyles(DateleMeleStyles)

export function FieldTextEditabil(props) {
  const classes = useStyles()
  const { onChange } = props

  return (
    <TextField
      className={classes.root}
      id='outline-helperText'
      defaultValue={'0770765234'}
      label='telefon'
      variant='outlined'
      onChange={event => onChange('telefon', event.target.value)}
    />
  )
}

FieldTextEditabil.propTypes = { angajat: PropTypes.object, onChange: PropTypes.func }
