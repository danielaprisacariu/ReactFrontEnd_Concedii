import React, { Fragment, useState } from 'react'
import { Typography, Grid, Container, Table, TableCell } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableContainer from '@material-ui/core/TableContainer'
import TabelHeader from './TabelHeader'
import TabelFooter from './TabelFooter'
import TabelBody from './TabelBody'


import { valueOrDefault } from 'utils/functions'
import SearchBar from './SearchBar'

const useStyles = makeStyles(ToateConcediileStyle)

function ToateConcediile() {
  const [pagini, setPage] = useState(0)
  const rowsOnPage = 1
  const totateConcediile = [
    { id: 1, name: 'Popescu', surname:'Bogdan', date: '29/02/2022', date2: '31/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 2, name: 'Gogu', surname: 'Marian', date: '27/02/2022', date2: '30/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 3, name: 'Gustavo', surname: 'Alex', date: '26/02/2022', date2: '19/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 4, name: 'Burluc', surname: 'Mihnea', date: '26/02/2022', date2: '19/03/2022', inlocuitor: 'Enache Cristian', stare: 'Aprobat' },
    { id: 5, name: 'Brustur', surname: 'Erwin', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Bravu Silviu', stare: 'Aprobat' },
    { id: 6, name: 'Pakalu', surname: 'Papito', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Mihai Capat', stare: 'Aprobat' },
    { id: 7, name: 'Constandachia', surname: 'Andreea', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Costa Mihai', stare: 'Aprobat' },
    { id: 8, name: 'Costea', surname: 'Ion', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Constandachia Andreea', stare: 'Aprobat' },
    { id: 9, name: 'Grigore', surname: 'Elena', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Mihailuta Felicia', stare: 'Aprobat' },
    { id: 10, name: 'Damian', surname: 'Eu', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Coman Daniela', stare: 'Aprobat' },
    { id: 11, name: 'Coman', surname: 'Daniela', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Coman Catalin', stare: 'Aprobat' },
    { id: 12, name: 'Catalin', surname: 'Mihai', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Ilie Cristi ', stare: 'Aprobat' },
    { id: 13, name: 'Brulan', surname: 'Claurentiu', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Pakalu Papito', stare: 'Aprobat' },
    { id: 14, name: 'Georgescu', surname: 'Sebastian', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Gica Petrescu', stare: 'Aprobat' },
    { id: 15, name: 'Ionescu', surname: 'Claudiu', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Ceausu Ioana', stare: 'Aprobat' },
    { id: 16, name: 'Shandru', surname: 'George', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Dolba Yo', stare: 'Aprobat' },
    { id: 17, name: 'Posea', surname: 'Tanta', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Su Ka', stare: 'Aprobat' },
    { id: 18, name: 'Facaianu', surname: 'Denisa', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Bly At', stare: 'Aprobat' },

  ]
  const classes = useStyles()

  const [filteredArray, setFilteredArray] = useState(totateConcediile)

  const handleFilter = input => {
    const value = input.target.value
    const newArray =  totateConcediile.filter(el => {
      if (value === '') {
        return el
      } else {
        return (el.surname.toLowerCase().includes(value) 
             || el.name.toLowerCase().includes(value)
             || el.inlocuitor.toLowerCase().includes(value)) 
      }
    })
    setFilteredArray(newArray);
    return
  }

  return (
    <>
      <SearchBar onFilter={handleFilter}/>
      <TableContainer className={classes.Tabel}>
        <Table>
          <TabelHeader />
          <TabelBody miguel={filteredArray} page={pagini} />
          <TabelFooter miguelito={filteredArray} page={pagini} setPage={setPage} />
        </Table>
      </TableContainer>
    </>
  )
}

export default ToateConcediile
