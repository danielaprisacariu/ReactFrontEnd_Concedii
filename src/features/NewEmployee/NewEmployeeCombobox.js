import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Style from './NewEmployeeStyle'

export function NewEmployeeCombobox(props) {
  const { arrayDataSource } = props
  const { onChange, propertyName, id } = props

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',

      flexWrap: 'wrap'
    },

    textField: {
      marginLeft: theme.spacing(1),

      marginRight: theme.spacing(1),

      width: 200
    }
  }))

  return (
    <div>
      <Autocomplete
        options={arrayDataSource}
        getOptionLabel={element => element.nume}
        value={id}
        style={{ width: 350 }}
        renderInput={params => <TextField {...params} variant='outlined' />}
        onChange={(event, value) => onChange(propertyName, value.id)}
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
