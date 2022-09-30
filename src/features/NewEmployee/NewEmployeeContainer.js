import React, { useEffect, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import NewEmployeeComponent from './NewEmployeeComponent'
import { NewEmployeeReducer, initialState, department, fct } from './NewEmployeeState'
import { useMutation } from '@apollo/client'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { INPUT_NEW_ANGAJAT } from './input'
import { SHA256 } from 'crypto-js'
//import { DEPARTAMENTE_QUERY, FUNCTII_QUERY } from 'features/AdministrareAngajati/queries'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import useUserData from 'utils/useData'
import moment from 'moment'

export default function NewEmployeeContainer() {
  const addToast = useToast()
  const user = useUserData()
  const [state, dispatch] = useReducer(NewEmployeeReducer, initialState)
  const [updateProcess, { loading: saving, _data, _error }] = useMutation(INPUT_NEW_ANGAJAT, {
    onCompleted: () => {
      addToast('Inserare realizata cu succes!', 'success')
      history.push({ pathname: `/employees` })
    },
    onError: error => addToast('Error', error)
  })
  const handleSave = () => {
    let eroare
    let newEmployee = state
    let hash = SHA256(newEmployee.parola).toString().toUpperCase()
    console.log('newEmployee', newEmployee)
    newEmployee = { ...newEmployee, parola: hash }
    const primaCifra = ['3', '4', '7', '8', '9']
    var esteVerificat = true
    if (newEmployee.cnp[0].includes(primaCifra)) esteVerificat = false
    // if (newEmployee.cnp.contains(primaCifra)) esteVerificat = false
    console.log(newEmployee.cnp.indexOf('1'))
    if (newEmployee.cnp.substring(3, 4) > 12) {
      eroare = 'CNP invalid!'
      esteVerificat = false
    }

    if (newEmployee.cnp.substring(5, 6) > 31) {
      eroare = 'CNP invalid!'
      esteVerificat = false
    }

    if (newEmployee.cnp.length != 13) {
      eroare = 'CNP invalid!'
      esteVerificat = false
    }
    if (newEmployee.serie.length != 2) {
      eroare = 'Serie invalida!'
      esteVerificat = false
    }
    if (newEmployee.no.length != 6) {
      eroare = 'Numar invalid!'
      esteVerificat = false
    }
    if (newEmployee.nrTelefon.length != 10) {
      eroare = 'Numar telefon invalid!'
      esteVerificat = false
    }
    var today = new Date()
    console.log(today)
    console.log(today.getTime())
    if (
      new Date(newEmployee.dataNasterii).getTime() >= today.getTime() ||
      new Date(newEmployee.dataNasterii).getTime() <= new Date('2004-01-01').getTime()
    ) {
      eroare = 'Data nastere invalida!'
      esteVerificat = false
    }
    if (new Date(newEmployee.dataAngajare).getTime() >= today.getTime()) {
      eroare = 'Data angajare invalida!'
      esteVerificat = false
    }
    if (newEmployee.email.indexOf('@totalsoft.ro') == -1) {
      eroare = 'Email invalid!'
      esteVerificat = false
    }

    if (esteVerificat == true) updateProcess({ variables: { input: newEmployee } })
    else addToast(eroare, 'Error')
    esteVerificat = true
  }
  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
    console.log(state)
  }

  // const { data: departamente, _loading } = useQueryWithErrorHandling(DEPARTAMENTE_QUERY, {})

  // const { data: functii, loading } = useQueryWithErrorHandling(FUNCTII_QUERY, {})

  // useEffect(
  //   () => {
  //     console.log(departamente?.departamenteData)
  //     console.log(functii?.functiiData)
  //   },
  //   [departamente],
  //   [functii]
  // )

  const history = useHistory()
  const handleClick = () => {
    history.push({ pathname: '/employees' })
  }
  return (
    <div>
      <NewEmployeeComponent
        // fct={functii ? functii.functiiData : []}
        // department={departamente ? departamente.departamenteData : []}
        onChange={onPropertyChange}
        onHandleSave={handleSave}
        state={state}
        onHistoryClick={handleClick}
      ></NewEmployeeComponent>
    </div>
  )
}
