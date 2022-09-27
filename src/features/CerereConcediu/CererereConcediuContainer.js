import { useMutation } from '@apollo/client'
import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import CerereConcediuComponenta from './CerereConcediuComponenta'
import { CerereConcediuReducer, initialState, inlocuitori, tipuriConcedii } from './CerereConcediuReducer'
import { PUT_CERERE_CONCEDIU } from './queries'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

export default function CererereConcediuContainer() {
  const addToast = useToast()
  const [state, dispatch] = useReducer(CerereConcediuReducer, initialState)
  const [updateProcess, { loading: saving, _data, _error }] = useMutation(PUT_CERERE_CONCEDIU, {
    onCompleted: () => {
      addToast('Inserare realizata cu succes!', 'success')
      history.push({ pathname: `/toateconcediile` })
    },
    onError: error => addToast('Error', error)
  })

  const handleSave = () => {
    const concediuNou = state
    console.log('concediuNou', concediuNou)
    updateProcess({ variables: { input: concediuNou } })
  }
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
      onHandleSave={handleSave}
      state={state}
    ></CerereConcediuComponenta>
  )
}
