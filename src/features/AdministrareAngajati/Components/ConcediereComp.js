import React, {useReducer}from 'react'
import {Container} from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { ComboBoxComponenta } from './ComboBoxComponenta'
import { AAReducer,initialState } from './AAReducer'
import { makeStyles } from '@material-ui/styles'
import AdministrareAngajatiStyle from '../AdministrareAngajatiStyle'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { ANGAJATI_QUERY } from '../queries'
const useStyles=makeStyles(AdministrareAngajatiStyle)
export function ConcediereComp({onChange,state}){
    const classes=useStyles()

     
    return(
        <Container className={classes.Card}><div>Concediere Angajat</div>
            <div>Din echipa lui:<ComboBoxComponenta onChange={onChange}
                                 propertyName='managerConced'
                                 arrayDataSource={state.manageri}/></div>
               <div>Angajat:<ComboBoxComponenta onChange={onChange}
                                 propertyName='angajatConced'
                                 arrayDataSource={ state.angajatiConced}/></div>                      
            <button >Concediaza</button>
        </Container>
    )
}
ConcediereComp.propTypes={
    onChange: PropTypes.func,
    state: PropTypes.Object

}