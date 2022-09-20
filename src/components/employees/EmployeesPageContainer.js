import { Grid } from '@material-ui/core'
import React, { Fragment } from 'react'
import EmployeesCard from './EmployeesCard'
import EmployeeFilter from './EmployeeFilters'
import EmployeesTableCard from './EmployeesTableCard'
import appStyle from './EmployeeStyle'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(appStyle)

const array = [
    {
      Id: 1,
      Poza: './images/884936_v9_bb.jpg',
      Nume: 'Dorel',
      Prenume: 'Ionel',
      Email: 'dorel.ionel@totalsoft.ro',
      NrTelefon: '0764256252',
      Manager: 'Popescu Ion',
      Functie: 'Frontend Developer',
      Departament: 'Dezvoltare'
    },
    {
      Id: 2,
      Poza: './images/Natalia_Dyer_by_Gage_Skidmore.jpg',
      Nume: 'Ionescu',
      Prenume: 'Natalia',
      Email: 'natalia.ionescu@totalsoft.ro',
      NrTelefon: '0764256252',
      Manager: 'Popescu Ion',
      Functie: 'Frontend Developer',
      Departament: 'Dezvoltare'
    },
    {
      Id: 3,
      Poza: './images/Noah-Schnapp.jpg',
      Nume: 'Popescu',
      Prenume: 'Ion',
      Email: 'ion.popescu@totalsoft.ro',
      NrTelefon: '0764256252',
      Manager: '',
      Functie: 'Frontend Developer',
      Departament: 'Dezvoltare'
    },
    {
      Id: 4,
      Poza: './images/joseph.jpg',
      Nume: 'Viorel',
      Prenume: 'Mitrut',
      Email: 'viorel. mitrut@totalsoft.ro',
      NrTelefon: '0764256252',
      Manager: 'Popescu Ion',
      Functie: 'Frontend Developer',
      Departament: 'Dezvoltare'
    },
    {
      Id: 4,
      Poza: './images/976094_v9_bb.jpg',
      Nume: 'Vasile',
      Prenume: 'Ion',
      Email: 'vasile.ion@totalsoft.ro',
      NrTelefon: '0764257252',
      Manager: 'Popescu Ion',
      Functie: 'Frontend Developer',
      Departament: 'Dezvoltare'
    },
    {
      Id: 6,
      Poza: './images/ionel.jpg',
      Nume: 'Gheorghe',
      Prenume: 'Ion',
      Email: 'gheorghe.ioon@totalsoft.ro',
      NrTelefon: '0764256254',
      Manager: '',
      Functie: 'Frontend Developer',
      Departament: 'Dezvoltare'
    }
  ]

function EmployeesPageContainer() {
  const classes = useStyles();
//console.log(array);
  const cards = [];
  //console.log(filter)

  return (
    <>
      {/* <EmployeesTableCard employeesArray={array}></EmployeesTableCard> */}
      {/* <EmployeeFilter></EmployeeFilter> */}

        <EmployeesCard employees={array}></EmployeesCard>
      
    </>
  )
}

// EmployeesPageContainer.propTypes = {
//   filter: PropTypes.object
// }

export default EmployeesPageContainer
