import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import PropTypes from 'prop-types'

export function NewEmployeeCombobox(props) {
  const { arrayDataSource, onChange, propertyName, id } = props
  console.log('id' + id)
  console.log(arrayDataSource)

  return (
    <div>
      <Autocomplete
        options={arrayDataSource}
        getOptionLabel={element => element.nume}
        style={{ width: 350 }}
        onChange={(event, value) => onChange(propertyName, value.id)}
        renderInput={params => <TextField {...params} variant='standard' />}
      />
    </div>
  )
}

NewEmployeeCombobox.propTypes = {
  arrayDataSource: PropTypes.array,
  propertyName: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.number
}
