import React, { createRef, useEffect, useReducer } from 'react'
import { MyProfileReducer, initialState } from './MyProfileReducer'
import DateleMeleComponenta from './DateleMeleComponenta'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_EMPLOYEE_BY_ID, UPDATE_ANGAJAT } from './queries'
import { useMutation } from '@apollo/client'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import useUserData from 'utils/useData'

function DateleMeleContainer() {
  const addToast = useToast()
  const user = useUserData()

  const [state, dispatch] = useReducer(MyProfileReducer, initialState)
  const { data, loading } = useQueryWithErrorHandling(GET_EMPLOYEE_BY_ID, { variables: { id: user.id } })

  const [updateProcess, { loading: saving, _data, _error }] = useMutation(UPDATE_ANGAJAT, {
    onCompleted: () => {
      addToast('Modificare realizata cu succes!', 'success')
    },
    onError: error => addToast('Error', error.message)
  })

  const handleSave = () => {
    const regex = /^[0-9\b]+$/
    if (state.nrTelefon.length != 10 || regex.test(state.nrTelefon) == false) {
      addToast('Numar telefon invalid')
    } else {
      updateProcess({ variables: { input: state } })
    }
  }

  useEffect(() => {
    if (loading || !data) return
    dispatch({ type: 'OnUploadFromDB', value: data.angajat })
  }, [data, loading])

  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
  }

  const inputFile = createRef()

  function handleUploadClick() {
    inputFile.current.click()
  }

  return (
    <DateleMeleComponenta
      state={state}
      onChange={onPropertyChange}
      handleUploadClick={handleUploadClick}
      onSave={handleSave}
    ></DateleMeleComponenta>
  )
}

export default DateleMeleContainer
