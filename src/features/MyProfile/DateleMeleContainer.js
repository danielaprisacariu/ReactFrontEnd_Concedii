import React, { createRef, useEffect, useReducer } from 'react'
import { MyProfileReducer, initialState } from './MyProfileReducer'
import DateleMeleComponenta from './DateleMeleComponenta'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_EMPLOYEE_BY_ID } from './queries'

function DateleMeleContainer() {
  const [state, dispatch] = useReducer(MyProfileReducer, initialState)

  const { data, loading } = useQueryWithErrorHandling(GET_EMPLOYEE_BY_ID, { variables: { id: 24 } })

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

  return <DateleMeleComponenta state={state} onChange={onPropertyChange} handleUploadClick={handleUploadClick}></DateleMeleComponenta>
}

export default DateleMeleContainer
