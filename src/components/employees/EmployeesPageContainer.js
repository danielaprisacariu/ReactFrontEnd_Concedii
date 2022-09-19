import React, {Fragment} from 'react'
import EmployeesTableCard from './EmployeesTableCard'



function EmployeesPageContainer(){
    const array = [{"Id": 1, "Nume": "Dorel", "Prenume": "Ionel", "Email": "dorel.ionel@totalsoft.ro", "Manager": "Popescu Ion", "Departament": "Dezvoltare"},
    {"Id": 2, "Nume": "Ionescu", "Prenume": "Gigel", "Email": "gigel.ionescu@totalsoft.ro", "Manager": "Popescu Ion", "Departament": "Dezvoltare"},
    {"Id": 3, "Nume": "Popescu", "Prenume": "Ion", "Email": "ion.popescu@totalsoft.ro", "Manager": "", "Departament": "Dezvoltare"}];

    return (
        <>
            <EmployeesTableCard employeesArray={array}></EmployeesTableCard>
        </>
    )

}

export default EmployeesPageContainer