import React, { Fragment, useState } from 'react'
import {Table} from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableContainer from '@material-ui/core/TableContainer'
import TabelHeader from './TabelHeader'
import TabelFooter from './TabelFooter'
import TabelBody from './TabelBody'
import SearchBar from './SearchBar'

const useStyles = makeStyles(ToateConcediileStyle)

function ToateConcediile() {
  const RopVals=[
    5,
    10,
    15,
    20
   ]
   const [RopVal,setRopVal] = useState(5)
  const handleRopValChange=event=>{
    console.log(event.target.value)
    setRopVal(event.target.value)
  }

  const [pagini, setPage] = useState(0)
  const totateConcediile = [
    { id: 1, name: 'Popescu', surname:'Bogdan',Tip:'Medical', date: '29/02/2022', date2: '31/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 2, name: 'Gogu', surname: 'Marian',Tip:'Odihna', date: '27/02/2022', date2: '30/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 3, name: 'Gustavo', surname: 'Alex',Tip:'Neplatit', date: '26/02/2022', date2: '19/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 4, name: 'Burluc', surname: 'Mihnea',Tip:'Medical', date: '26/02/2022', date2: '19/03/2022', inlocuitor: 'Enache Cristian', stare: 'Aprobat' },
    { id: 5, name: 'Brustur', surname: 'Erwin', Tip:'Neplatit', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Bravu Silviu', stare: 'Aprobat' },
    { id: 6, name: 'Pakalu', surname: 'Papito',Tip:'Odihna', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Mihai Capat', stare: 'Aprobat' },
    { id: 7, name: 'Constandachia', surname: 'Andreea',Tip:'Neplatit', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Costa Mihai', stare: 'Aprobat' },
    { id: 8, name: 'Costea', surname: 'Ion',Tip:'Medical', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Constandachia Andreea', stare: 'Aprobat' },
    { id: 9, name: 'Grigore', surname: 'Elena',Tip:'Odihna', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Mihailuta Felicia', stare: 'Aprobat' },
    { id: 10, name: 'Damian', surname: 'Eu',Tip:'Medical', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Coman Daniela', stare: 'Aprobat' },
    { id: 11, name: 'Coman', surname: 'Daniela',Tip:'Neplatit', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Coman Catalin', stare: 'Aprobat' },
    { id: 12, name: 'Catalin', surname: 'Mihai',Tip:'Odihna', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Ilie Cristi ', stare: 'Aprobat' },
    { id: 13, name: 'Brulan', surname: 'Claurentiu',Tip:'Medical', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Pakalu Papito', stare: 'Aprobat' },
    { id: 14, name: 'Georgescu', surname: 'Sebastian',Tip:'Medical', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Gica Petrescu', stare: 'Aprobat' },
    { id: 15, name: 'Ionescu', surname: 'Claudiu',Tip:'Medical', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Ceausu Ioana', stare: 'Aprobat' },
    { id: 16, name: 'Shandru', surname: 'George',Tip:'Neplatit', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Dolba Yo', stare: 'Aprobat' },
    { id: 17, name: 'Posea', surname: 'Tanta',Tip:'Medical', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Su Ka', stare: 'Aprobat' },
    { id: 18, name: 'Facaianu', surname: 'Denisa',Tip:'Neplatit', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Bly At', stare: 'Aprobat' },

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
          <TabelBody miguel={filteredArray} page={pagini} RopVal={RopVal} />
          <TabelFooter miguelito={filteredArray} page={pagini} setPage={setPage} RopVals={RopVals} handleRopValChange={handleRopValChange} RopVal={RopVal}/>
        </Table>
      </TableContainer>
    </>
  )
}

export default ToateConcediile
