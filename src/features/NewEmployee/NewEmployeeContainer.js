import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import NewEmployeeComponent from './NewEmployeeComponent'
import { NewEmployeeReducer, initialState, department, fct } from './NewEmployeeState'
import { useMutation } from '@apollo/client'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { INPUT_NEW_ANGAJAT } from './input'
import { SHA256 } from 'crypto-js'
import { DEPARTAMENTE_QUERY, FUNCTII_QUERY } from 'features/AdministrareAngajati/queries'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'

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
    let newEmployee = state
    let hash = SHA256(newEmployee.parola).toString().toUpperCase()
    console.log('newEmployee', newEmployee)
    newEmployee = { ...newEmployee, parola: hash }
    updateProcess({ variables: { input: newEmployee } })
  }
  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
    console.log(state)
  }
  useQueryWithErrorHandling(DEPARTAMENTE_QUERY, {
    onCompleted: data => {
      onPropertyChange('departamente', data.departamenteData)
    }
  })
  useQueryWithErrorHandling(FUNCTII_QUERY, {
    onCompleted: data => {
      onPropertyChange('functii', data.functiiData)
    }
  })
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
