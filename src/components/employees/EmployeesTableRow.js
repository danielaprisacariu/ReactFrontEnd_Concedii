import React from 'react'
import PropTypes from 'prop-types'
import {TableCell} from '@material-ui/core'
import appStyle from './EmployeeStyle';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(appStyle)
function EmployeesTableRow({employee}){

    const classes = useStyles();
    return (
        <tr className={classes.tableRow}>
            <TableCell>{employee.Nume}</TableCell>
            <TableCell>{employee.Prenume}</TableCell>
            <TableCell>{employee.Email}</TableCell>
            <TableCell>{employee.Manager}</TableCell>
            <TableCell>{employee.Departament}</TableCell>
        </tr>
    )
}

EmployeesTableRow.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeesTableRow;
