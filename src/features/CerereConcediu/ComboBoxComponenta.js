import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { MenuItem, Select } from '@material-ui/core'
import Styles from './Styles.js'

const useStyles = makeStyles(Styles)
export function ComboBoxComponenta(props) {
  const { arrayDataSource, onChange, propertyName, id } = props

  // const useStyles = makeStyles(theme => ({
  //   container: {
  //     display: 'flex',

  //     flexWrap: 'wrap'
  //   },

  //   textField: {
  //     marginLeft: theme.spacing(1),

  //     marginRight: theme.spacing(1),

  //     width: 200
  //   }
  // }))

  return (
    <div>
      <Autocomplete
        options={arrayDataSource}
        getOptionLabel={element => element.nume}
        value={id}
        style={{ width: 300 }}
        onChange={(event, value) => onChange(propertyName, value.id)}
        renderInput={params => <TextField {...params} variant='standard' />}
      />
    </div>
  )
}

ComboBoxComponenta.propTypes = {
  arrayDataSource: PropTypes.array,
  onChange: PropTypes.func,
  propertyName: PropTypes.string,
  id: PropTypes.number
}
