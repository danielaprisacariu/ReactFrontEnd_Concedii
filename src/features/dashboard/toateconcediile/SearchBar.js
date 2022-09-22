import React from 'react'

import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle'
const useStyles=makeStyles(ToateConcediileStyle)

function SearchBar({onFilter}) {
  const classes=useStyles()
  return <TextField id='outlined-basic' variant='outlined' size="small" witdh ='70%' label='Cautare' onChange={onFilter} />
}

SearchBar.propTypes = {
  onFilter: PropTypes.func
}

export default SearchBar
