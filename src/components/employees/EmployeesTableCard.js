import { Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import EmployeesTableRow from './EmployeesTableRow';


function EmployeesTableCard(props){

    const {employeesArray} = props;
    const rows = [];

    employeesArray.map(employee => {
        rows.push(
            <EmployeesTableRow employee={employee} key={employee.Id}></EmployeesTableRow>
        )
     });
     
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nume</TableCell>
                    <TableCell>Prenume</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Manager</TableCell>
                    <TableCell>Departament</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows}
            </TableBody>

        </Table>
    )

}



EmployeesTableCard.propTypes = {
    employeesArray: PropTypes.array.isRequired,
  }

export default EmployeesTableCard