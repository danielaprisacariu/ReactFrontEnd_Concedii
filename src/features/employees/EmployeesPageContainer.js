import { Grid } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import EmployeesCard from './EmployeesCard'
import EmployeeFilter from './EmployeeFilters'
import EmployeesTableCard from './EmployeesTableCard'
import appStyle from './EmployeeStyle'
import { makeStyles, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { GET_ALL_EMPLOYEE } from './queries'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import NewEmployeeContainer from 'features/NewEmployee/NewEmployeeContainer'
import { AdministrareAngajati } from 'features/AdministrareAngajati/AdministrareAngajati'
import useUserData from 'utils/useData'

const useStyles = makeStyles(appStyle)

function EmployeesPageContainer() {
  const user=useUserData()
  const [Shown, SetShown] = useState(1)
  const { data } = useQueryWithErrorHandling(GET_ALL_EMPLOYEE)
  const onHandleSwitch = x => {
    SetShown(x)
  }

  return (
    <>
      {(Shown === 1&&user.id===26)&& (
        <>
          <div>
            <Button variant='contained' onClick={()=> (onHandleSwitch(2))}>Adauga angajat</Button>
            <Button variant='contained' onClick={()=> (onHandleSwitch(3))}>Administreaza angajatii</Button>
          </div>
          <EmployeesCard employees={data}></EmployeesCard>
        </>
      )}
      {(Shown === 2 && user.id===26) && (
        <>
          <div>
            <Button variant='contained' onClick={()=> onHandleSwitch(1)}>Angajati</Button>
            <Button variant='contained' onClick={()=> onHandleSwitch(3)}>Administreaza angajatii</Button>
          </div>
          <NewEmployeeContainer></NewEmployeeContainer>
        </>
      )}
      {(Shown === 3 && user.id===26) && (
        <>
          <div>
            <Button variant='contained' onClick={()=> onHandleSwitch(1)}>Angajati</Button>
            <Button variant='contained' onClick={()=> onHandleSwitch(2)}>Adaugare Angajat</Button>
          </div>
          <AdministrareAngajati></AdministrareAngajati>
        </>
      )}
      {(user.id!==26) && ( <>
         
        <EmployeesCard employees={data}></EmployeesCard>
        </>)}
    </>
  )
}

export default EmployeesPageContainer
