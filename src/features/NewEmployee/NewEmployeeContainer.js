import React, { useReducer } from 'react'
import NewEmployeeComponent from './NewEmployeeComponent'
import { NewEmployeeReducer, initialState, department, fct } from './NewEmployeeState'

export default function NewEmployeeContainer() {
  const [state, dispatch] = useReducer(NewEmployeeReducer, initialState)
  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
    console.log(state)
  }
  return <NewEmployeeComponent fct={fct} department={department} onChange={onPropertyChange} state={state}></NewEmployeeComponent>
}
