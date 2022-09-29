import React, {useReducer}from 'react'
import {Container,Button} from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { ComboBoxComponenta } from './ComboBoxComponenta'
import { AAReducer,initialState } from './AAReducer'
import { makeStyles } from '@material-ui/styles'
import AdministrareAngajatiStyle from '../AdministrareAngajatiStyle'
import { MODIFICARE_ECHIPA_MUTATION } from '../queries'

const useStyles=makeStyles(AdministrareAngajatiStyle)
export function EchipaNouaComp({onChange,state,onClick}){
 const classes=useStyles()
   
    return(
        <Container className={classes.Card}><div>Infiinteaza echipa</div>
            <div>Manager:<ComboBoxComponenta onChange={onChange}
                                 propertyName='managerEN'
                                 arrayDataSource={state.manageri}/></div>
               <div>Angajat:<ComboBoxComponenta onChange={onChange}
                                 propertyName='angajatEN'
                                 arrayDataSource={state.angajatiEN}/></div>                      
                  <Button variant="contained" onClick={onClick}>Creeaza</Button>
        </Container>
    )
}
EchipaNouaComp.propTypes={
   onChange: PropTypes.func,
   state: PropTypes.object,
   onClick: PropTypes.func
}
