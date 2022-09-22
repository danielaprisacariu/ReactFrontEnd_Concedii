import React, { createRef, useReducer, useRef } from 'react'
import { MyProfileReducer, initialState } from './MyProfileReducer'
import DateleMeleComponenta from './DateleMeleComponenta'

function DateleMeleContainer() {
  const [state, dispatch] = useReducer(MyProfileReducer, initialState)

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
