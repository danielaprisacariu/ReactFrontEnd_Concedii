import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import NewEmployeeComponent from './NewEmployeeComponent'
import { NewEmployeeReducer, initialState, department, fct } from './NewEmployeeState'

export default function NewEmployeeContainer() {
  const [state, dispatch] = useReducer(NewEmployeeReducer, initialState)
  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
    console.log(state)
  }
  const history = useHistory()
  const handleClick = () => {
    history.push({ pathname: '/employees' })
  }
  return (
    <NewEmployeeComponent
      fct={fct}
      department={department}
      onChange={onPropertyChange}
      state={state}
      onHistoryClick={handleClick}
    ></NewEmployeeComponent>
  )
}
