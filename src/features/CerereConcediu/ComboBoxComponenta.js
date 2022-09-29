import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Styles from './Styles.js'

const useStyles = makeStyles(Styles)
export function ComboBoxComponenta(props) {
  const { arrayDataSource, onChange, propertyName, id } = props

  return (
    <div>
      <Autocomplete
        options={arrayDataSource}
        getOptionLabel={element => element.nume}
        style={{ width: 300 }}
        onChange={(event, value) => onChange(propertyName, value.id)}
        renderInput={params => <TextField {...params} variant='standard' required={true} />}
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
