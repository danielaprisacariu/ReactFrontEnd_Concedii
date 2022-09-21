import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

export function ComboBoxComponenta(props) {
  const { arrayDataSource } = props

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
        style={{ width: 300 }}
        renderInput={params => <TextField {...params} variant='standard' />}
      />
    </div>
  )
}

ComboBoxComponenta.propTypes = { arrayDataSource: PropTypes.array }
