import { Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import EmployeesTableRow from './EmployeesTableRow';
import appStyle from './EmployeeStyle';
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(appStyle)
function EmployeesTableCard(props){

    const classes = useStyles();
    const {employeesArray} = props;
    const rows = [];

    employeesArray.map(employee => {
        rows.push(
            <EmployeesTableRow employee={employee} key={employee.Id}></EmployeesTableRow>
        )
     });

    return (
        <Table>
            <TableHead className={classes.tableHeader}>
                <TableRow className={classes.tableCells}>
                    <TableCell className={classes.tableCells}>Nume</TableCell>
                    <TableCell className={classes.tableCells}>Prenume</TableCell>
                    <TableCell className={classes.tableCells}>Email</TableCell>
                    <TableCell className={classes.tableCells}>Manager</TableCell>
                    <TableCell className={classes.tableCells}>Departament</TableCell>
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