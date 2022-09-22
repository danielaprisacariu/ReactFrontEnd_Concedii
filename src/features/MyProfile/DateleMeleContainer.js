import React, { createRef, useReducer, useRef } from 'react'
import { MyProfileReducer, initialState } from './MyProfileReducer'
import DateleMeleCard from './DateleMeleCard'

function DateleMeleContainer() {
  const [state, dispatch] = useReducer(MyProfileReducer, initialState)

  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
  }

  const inputFile = createRef()

  function handleUploadClick() {
    inputFile.current.click()
  }

  return <DateleMeleCard state={state} onChange={onPropertyChange} handleUploadClick={handleUploadClick}></DateleMeleCard>
}

export default DateleMeleContainer
