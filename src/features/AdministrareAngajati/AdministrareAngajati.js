import React from 'react'
import { useReducer } from 'react'
import { ConcediereComp } from "./Components/ConcediereComp"
import { EchipaNouaComp } from "./Components/EchipaNouaComp"
import { SchimbareDepart } from './Components/SchimbareDepart'
import {SchimbareFunc} from './Components/SchimbareFunc'
import { StergereEchipaComp } from './Components/StergereEchipaComp'
import { TransferAngajatComp } from './Components/TransferAngajatComp'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'

import { AAReducer,initialState } from './Components/AAReducer'
import { ANGAJATI_QUERY, MANAGERI_QUERY,DEPARTAMENTE_QUERY,FUNCTII_QUERY ,MODIFICARE_ECHIPA_MUTATION,SCHIMBARE_DEPARTAMENT_MUTATION,SCHIMBARE_FUNCTIE_MUTATION} from './queries'

import{useMutation} from '@apollo/client'
import {useToast} from '@bit/totalsoft_oss.react-mui.kit.core'
export function AdministrareAngajati(){
    const addToast=useToast()
    const [updateProcess, { loading: saving, _data, _error }] = useMutation(MODIFICARE_ECHIPA_MUTATION, {
        onCompleted: () => {
          addToast('Modificare realizata cu succes!', 'success')
          //history.push({ pathname: `/NewEmployee` })
        },
        onError: error => addToast('Error', error)
      })
      const [schimbareFunctie, { loading: saving2, _data2, _error2 }] = useMutation(SCHIMBARE_FUNCTIE_MUTATION, {
        onCompleted: () => {
          addToast('Modificare realizata cu succes!', 'success')
          //history.push({ pathname: `/NewEmployee` })
        },
        onError: error => addToast('Error', error)
      })
      const [schimbareDepartament, { loading: saving3, _data3, _error3 }] = useMutation(SCHIMBARE_DEPARTAMENT_MUTATION, {
        onCompleted: () => {
          addToast('Modificare realizata cu succes!', 'success')
          //history.push({ pathname: `/NewEmployee` })
        },
        onError: error => addToast('Error', error)
      })
    const [state,dispatch]=useReducer(AAReducer,initialState)
    const onChange=(propertyName,value)=>{
        dispatch({type:'OnPropertyChange',propertyName,value})
        console.log(state)
    }
   const EchipaNoua=() => { updateProcess({ variables: { input: {managerEN:26,angajatEN:state.angajatEN} } })}
    useQueryWithErrorHandling(MANAGERI_QUERY,{ onCompleted: data => {
        onChange ('manageri',data.manageriData)
      }})
   const StergeEchipa=() => { updateProcess({ variables: { input: {managerEN:30,angajatEN:state.managerSE} } })}
   const TransferAngajat=() => { updateProcess({ variables: { input: {managerEN:state.manager2TA,angajatEN:state.angajatTA} } })}
   const SchimbareFunctie=() => { schimbareFunctie({ variables: { input: {angajatFunc:state.angajatFunc,functie:state.functie} } })}  
   const SchimbareDepartament=() => { schimbareDepartament({ variables: { input: {angajatDep:state.angajatDep,departament:state.departament} } })} 
     
          useQueryWithErrorHandling(ANGAJATI_QUERY,{variables:{id:state.managerConced},skip:state.managerConced===null, onCompleted: data => {
        onChange ('angajatiConced',data.angajatiData)
      }})
      useQueryWithErrorHandling(ANGAJATI_QUERY,{variables:{id:state.managerEN},skip:state.managerEN===null, onCompleted: data => {
        onChange ('angajatiEN',data.angajatiData)
      }})
      useQueryWithErrorHandling(ANGAJATI_QUERY,{variables:{id:state.managerDep},skip:state.managerDep===null, onCompleted: data => {
        onChange ('angajatiDep',data.angajatiData)
      }})
      useQueryWithErrorHandling(ANGAJATI_QUERY,{variables:{id:state.managerFunc},skip:state.managerFunc===null, onCompleted: data => {
        onChange ('angajatiFunc',data.angajatiData)
      }})
      useQueryWithErrorHandling(ANGAJATI_QUERY,{variables:{id:state.manager1TA},skip:state.manager1TA===null, onCompleted: data => {
        onChange ('angajatiTA',data.angajatiData)
      }})
      useQueryWithErrorHandling(DEPARTAMENTE_QUERY,{ onCompleted: data => {
        onChange ('departamente',data.departamenteData)
      }})
      useQueryWithErrorHandling(FUNCTII_QUERY,{ onCompleted: data => {
        onChange ('functii',data.functiiData)
      }})
      console.log(state)
      const manageriFU=[]
      const lng=state.manageri.length
      
      if(state.hasChanged==1){
      for(var i=0;i<lng;i++){
       if(state.manageri[i].id!==state.manager1TA){
           manageriFU.push(state.manageri[i])
        }
     }
      onChange('hasChanged',0)
      onChange('manageri2TA',manageriFU)}
        return(
            <>
            <ConcediereComp onClick={EchipaNoua} onChange={onChange} state={state}/>
            <EchipaNouaComp onClick={EchipaNoua} onChange={onChange} state={state}/>
            <SchimbareDepart onChange={SchimbareDepartament} state={state}/>
            <SchimbareFunc onChange={SchimbareFunctie} state={state}/>
            <StergereEchipaComp onClick={StergeEchipa} onChange={onChange} state={state}/>
            <TransferAngajatComp onClick={TransferAngajat} onChange={onChange} state={state}/>
            </>
        )
}