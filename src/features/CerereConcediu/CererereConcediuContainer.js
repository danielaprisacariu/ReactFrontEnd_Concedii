import { useMutation } from '@apollo/client'
import React, { useEffect, useReducer, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CerereConcediuComponenta from './CerereConcediuComponenta'
import { CerereConcediuReducer, initialState } from './CerereConcediuReducer'
import { GET_INLOCUITORI, GET_TIP_CONCEDII, GET_ZILE_RAMASE, PUT_CERERE_CONCEDIU } from './queries'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import useUserData from '../../utils/useData'
import { AUTHENTICATE_USER } from 'components/login/mutations'

export default function CererereConcediuContainer() {
  const addToast = useToast()
  const [state, dispatch] = useReducer(CerereConcediuReducer, initialState)

  const user = useUserData()
  //const userr = AUTHENTICATE_USER()
  const { data: inlocuitori, _loading } = useQueryWithErrorHandling(GET_INLOCUITORI, {
    variables: { idM: user.managerId, angajatiNumeConcatenatId: user.id },
    skip: !user?.managerId
  })

  const { data: tipConcedii, loading } = useQueryWithErrorHandling(GET_TIP_CONCEDII, {})

  let tipId = state?.tipConcediuId
  const { data: zileRamase, loading: ld } = useQueryWithErrorHandling(GET_ZILE_RAMASE, {
    variables: { zileRamaseId: user.id, tipConcediuId: state?.tipConcediuId },
    skip: !state?.tipConcediuId || !user.id //state?.tipConcediuId
  })

  useEffect(
    () => {
      console.log(inlocuitori?.angajatiNumeConcatenat)
      console.log(tipConcedii?.tipConcedii)
      console.log(zileRamase)
    },
    [inlocuitori],
    [tipConcedii],
    zileRamase
  )

  const [updateProcess, { loading: saving, _data, _error }] = useMutation(PUT_CERERE_CONCEDIU, {
    onCompleted: () => {
      addToast('Inserare realizata cu succes!', 'success')
      //history.push({ pathname: `/toateconcediile` })
    },
    onError: error => addToast('Error', error)
  })

  const handleSave = () => {
    if (state.zileConcediu <= state.zileRamase && state.zileRamase > 0 && state.zileRamase != null)
      updateProcess({ variables: { input: state } })
    else addToast('Error', '')
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
      zileRamase={zileRamase}
    ></CerereConcediuComponenta>
  )
}
