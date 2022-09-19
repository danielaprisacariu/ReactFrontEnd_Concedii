import { Input } from '@material-ui/core'
import React from 'react'

function EmployeeFilter(){
    
    return(
        <>
        <Input type="text" placeholder='Nume'></Input>
        <Input type="text" placeholder='Prenume'></Input>
        </>
    )
}

export default EmployeeFilter