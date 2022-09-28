import { useMutation } from '@apollo/client'
import React, { useEffect, useReducer, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CerereConcediuComponenta from './CerereConcediuComponenta'
import { CerereConcediuReducer, initialState } from './CerereConcediuReducer'
import { GET_INLOCUITORI, GET_TIP_CONCEDII, PUT_CERERE_CONCEDIU } from './queries'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'

export default function CererereConcediuContainer() {
  const addToast = useToast()
  const [state, dispatch] = useReducer(CerereConcediuReducer, initialState)

  const { data: inlocuitori, _loading } = useQueryWithErrorHandling(GET_INLOCUITORI, {
    variables: { idM: 30, angajatiNumeConcatenatId: 24 }
  })

  const { data: tipConcedii, loading } = useQueryWithErrorHandling(GET_TIP_CONCEDII, {})

  useEffect(
    () => {
      console.log(inlocuitori?.angajatiNumeConcatenat)
      console.log(tipConcedii?.tipConcedii)
    },
    [inlocuitori],
    [tipConcedii]
  )

  const [updateProcess, { loading: saving, _data, _error }] = useMutation(PUT_CERERE_CONCEDIU, {
    onCompleted: () => {
      addToast('Inserare realizata cu succes!', 'success')
      //history.push({ pathname: `/toateconcediile` })
    },
    onError: error => addToast('Error', error)
  })

  const handleSave = () => {
    updateProcess({ variables: { input: state } })
  }

  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
  }

  const history = useHistory()
  const handleClick = () => {
    history.push({ pathname: `/toateconcediile` })
  }
  return (
    <CerereConcediuComponenta
      tipuriConcedii={tipConcedii ? tipConcedii.tipConcedii : []}
      inlocuitori={inlocuitori ? inlocuitori.angajatiNumeConcatenat : []}
      onChange={onPropertyChange}
      onHistoryClick={handleClick}
      onHandleSave={handleSave}
      state={state}
    ></CerereConcediuComponenta>
  )
}
