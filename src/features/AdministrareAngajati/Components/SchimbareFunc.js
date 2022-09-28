import React, { useReducer } from 'react'
import { Container } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { ComboBoxComponenta } from './ComboBoxComponenta'

import { makeStyles } from '@material-ui/styles'
import AdministrareAngajatiStyle from '../AdministrareAngajatiStyle'
const useStyles = makeStyles(AdministrareAngajatiStyle)
export function SchimbareFunc({onChange,state}) {
  const classes = useStyles()
 
  return (
    <Container className={classes.Card,classes.Tall}>
      <div>Schimbare Functie</div>
      <div>
        Manager:
        <ComboBoxComponenta onChange={onChange} propertyName='managerFunc' arrayDataSource={state.manageri} />
      </div>
      <div>
        Angajat:
        <ComboBoxComponenta onChange={onChange} propertyName='angajatFunc' arrayDataSource={state.angajatiFunc} />
      </div>
      <div>
        Functie:
        <ComboBoxComponenta onChange={onChange} propertyName='functie' arrayDataSource={state.functii} />
      </div>
    </Container>
  )
}
SchimbareFunc.propTypes={
    onChange: PropTypes.func,
    state: PropTypes.object
}