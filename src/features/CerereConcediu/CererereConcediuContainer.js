import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import CerereConcediuComponenta from './CerereConcediuComponenta'
import { CerereConcediuReducer, initialState, inlocuitori, tipuriConcedii } from './CerereConcediuReducer'

export default function CererereConcediuContainer() {
  const [state, dispatch] = useReducer(CerereConcediuReducer, initialState)

  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
    console.log(state)
  }

  const history = useHistory()
  const handleClick = () => {
    history.push({ pathname: `/toateconcediile` })
  }
  return (
    <CerereConcediuComponenta
      tipuriConcedii={tipuriConcedii}
      inlocuitori={inlocuitori}
      onChange={onPropertyChange}
      onHistoryClick={handleClick}
      state={state}
    ></CerereConcediuComponenta>
  )
}
