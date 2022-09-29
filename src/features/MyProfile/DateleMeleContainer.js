import React, { createRef, useEffect, useReducer } from 'react'
import { MyProfileReducer, initialState } from './MyProfileReducer'
import DateleMeleComponenta from './DateleMeleComponenta'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_EMPLOYEE_BY_ID, UPDATE_ANGAJAT } from './queries'
import { useMutation } from '@apollo/client'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

function DateleMeleContainer() {
  const addToast = useToast()

  const [state, dispatch] = useReducer(MyProfileReducer, initialState)
  const { data, loading } = useQueryWithErrorHandling(GET_EMPLOYEE_BY_ID, { variables: { id: 24 } })

  const [updateProcess, { loading: saving, _data, _error }] = useMutation(UPDATE_ANGAJAT, {
    onCompleted: () => {
      addToast('Modificare realizata cu succes!', 'success')
    },
    onError: error => addToast('Error', error.message)
  })

  const handleSave = () => {
    console.log('aici')
    console.log(state)
    updateProcess({ variables: { input: state } })
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
