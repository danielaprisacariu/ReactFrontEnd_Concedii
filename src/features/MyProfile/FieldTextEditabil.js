import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import DateleMeleStyles from './DateleMeleStyles'
import PropTypes from 'prop-types'
const useStyles = makeStyles(DateleMeleStyles)

export function FieldTextEditabil(props) {
  const classes = useStyles()
  const { angajat } = props

  return <TextField className={classes.root} id='outline-helperText' label='Editable' value={angajat.telefon} variant='outlined' />
}

FieldTextEditabil.propTypes = { angajat: PropTypes.object }
