import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'



export function ComboBoxComponenta(props) {
  const {check, arrayDataSource, onChange, propertyName} = props

  return (
    <div>
      <Autocomplete
        options={arrayDataSource}
        getOptionLabel={element => element.nume}
        style={{ width: 300 }}
        onChange={(event, value) => {onChange(propertyName, value.id)
                                if(check){onChange('hasChanged','1')}}}
        renderInput={params => <TextField {...params} variant='standard' size='small' />}
      />
    </div>
  )
}

ComboBoxComponenta.propTypes = {
  arrayDataSource: PropTypes.array,
  onChange: PropTypes.func,
  propertyName: PropTypes.string,
  id: PropTypes.number,
  check: PropTypes.bool
}
