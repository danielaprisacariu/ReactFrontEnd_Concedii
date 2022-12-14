import React, { useReducer } from 'react'
import { Container,Button } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { ComboBoxComponenta } from './ComboBoxComponenta'
import { AAReducer, initialState } from './AAReducer'
import { makeStyles } from '@material-ui/styles'
import AdministrareAngajatiStyle from '../AdministrareAngajatiStyle'
const useStyles = makeStyles(AdministrareAngajatiStyle)
export function SchimbareDepart({onClick,onChange,state}) {
  const classes = useStyles()
 
  return (
    <Container className={classes.Card,classes.Tall} >
      <div>Schimbare Departament</div>
      <div>
        Manager:
        <ComboBoxComponenta  onChange={onChange} propertyName='managerDep' arrayDataSource={state.manageri} />
      </div>
      <div>
        Angajat:
        <ComboBoxComponenta onChange={onChange} propertyName='angajatDep' arrayDataSource={state.angajatiDep} />
      </div>
      <div>
        Departament:
        <ComboBoxComponenta onChange={onChange} propertyName='departament' arrayDataSource={state.departamente} />
      </div>
      <Button variant="contained" onClick={onClick}>Schimba</Button>
    </Container>
  )
}
SchimbareDepart.propTypes={
   
        onChange: PropTypes.func,
        state: PropTypes.object,
        onClick: PropTypes.func

}
