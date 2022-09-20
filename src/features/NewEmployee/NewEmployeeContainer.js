import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import NewEmployeeCard from './NewEmployeeCard'
import Style from './NewEmployeeStyle';
import { makeStyles } from '@material-ui/core'


export default function NewEmployeeContainer() {
  return (
   
    <NewEmployeeCard fct={fct} department={department}></NewEmployeeCard>
        
)

}
const fct = [
  { id: 1, nume: 'Web Developer' },
  { id: 2, nume: 'Accountant' },
  { id: 3, nume: 'Consultant' },
  { id: 4, nume: 'Analyst' },
  { id: 5, nume: 'New Employee' },
  { id: 6, nume: 'Manager' },
  { id: 7, nume: 'CEO' }
]

const department = [
  { id: 1, nume: 'Finances' },
  { id: 2, nume: 'Development' },
  { id: 3, nume: 'Human Resources' },
  { id: 4, nume: 'Support' },
  { id: 5, nume: 'Sales' },
  { id: 6, nume: 'Marketing' },
  { id: 7, nume: 'New Employees' },
  { id: 8, nume: 'Management' }
]

