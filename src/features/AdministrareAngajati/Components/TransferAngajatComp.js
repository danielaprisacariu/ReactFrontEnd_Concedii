import React, { useReducer } from 'react'
import { Container } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { ComboBoxComponenta } from './ComboBoxComponenta'
import { AAReducer, initialState } from './AAReducer'
import { makeStyles } from '@material-ui/styles'
import AdministrareAngajatiStyle from '../AdministrareAngajatiStyle'
import {Button} from '@material-ui/core'
const useStyles = makeStyles(AdministrareAngajatiStyle)
export function TransferAngajatComp({onChange,state,onClick}) {
  const classes = useStyles()
  
  return (
    <Container className={classes.Card,classes.Tall}>
      <div>Transfer Angajat</div>
      <div>
        Din echipa lui:
        <ComboBoxComponenta check={true} onChange={onChange} propertyName='manager1TA' arrayDataSource={state.manageri} />
      </div>
      <div>
        Angajat:
        <ComboBoxComponenta onChange={onChange} propertyName='angajatTA' arrayDataSource={state.angajatiTA} />
      </div>
      <div>
        In echipa lui:
        <ComboBoxComponenta onChange={onChange} propertyName='manager2TA' arrayDataSource={state.manageri2TA} />
      </div>
      <Button variant="contained" onClick={onClick}>Transfera</Button>
    </Container>
  )
}
TransferAngajatComp.propTypes={
    onChange: PropTypes.func,
    state: PropTypes.object,
    onClick:PropTypes.func
}