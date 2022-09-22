import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import DateleMeleStyles from './DateleMeleStyles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(DateleMeleStyles)

export function TextFieldReadOnly(props) {
  const { dataPersonala } = props
  const classes = useStyles()
  return (
    <TextField
      className={classes.root}
      value={dataPersonala}
      id='standard-read-only-input'
      disabled
      InputProps={{
        readOnly: true
      }}
      variant='outlined'
    />
  )
}

TextFieldReadOnly.propTypes = { dataPersonala: PropTypes.string }
