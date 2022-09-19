import React from 'react'
import PropTypes from 'prop-types'
import {TableRow, TableCell} from '@material-ui/core'

function EmployeesTableRow({employee}){

    return (
        <TableRow>
            <TableCell>{employee.Nume}</TableCell>
            <TableCell>{employee.Prenume}</TableCell>
            <TableCell>{employee.Email}</TableCell>
            <TableCell>{employee.Manager}</TableCell>
            <TableCell>{employee.Departament}</TableCell>
        </TableRow>
    )
}

EmployeesTableRow.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeesTableRow;
