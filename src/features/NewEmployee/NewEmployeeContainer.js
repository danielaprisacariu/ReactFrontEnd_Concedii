import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import NewEmployeeComponent from './NewEmployeeComponent'
import { NewEmployeeReducer, initialState, department, fct } from './NewEmployeeState'
import { useMutation } from '@apollo/client'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { INPUT_NEW_ANGAJAT } from './input'

export default function NewEmployeeContainer() {
  const addToast = useToast()
  const [state, dispatch] = useReducer(NewEmployeeReducer, initialState)
  const [updateProcess, { loading: saving, _data, _error }] = useMutation(INPUT_NEW_ANGAJAT, {
    onCompleted: () => {
      addToast('Inserare realizata cu succes!', 'success')
      //history.push({ pathname: `/NewEmployee` })
    },
    onError: error => addToast('Error', error)
  })
  const handleSave = () => {
    const newEmployee = state
    console.log('newEmployee', newEmployee)
    updateProcess({ variables: { input: newEmployee } })
  }
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
      onHandleSave={handleSave}
      state={state}
      onHistoryClick={handleClick}
    ></NewEmployeeComponent>
  )
}
