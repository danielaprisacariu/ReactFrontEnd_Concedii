import React from 'react'
import './ToateConcediile.css'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

function SearchBar({onFilter}) {
  return <TextField id='outlined-basic' variant='outlined' witdh ='70%' label='Cautare' onChange={onFilter} />
}

SearchBar.propTypes = {
  onFilter: PropTypes.func
}

export default SearchBar
