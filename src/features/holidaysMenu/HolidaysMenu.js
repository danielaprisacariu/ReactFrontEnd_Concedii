import React, { useState } from 'react'
import { TableFooter, TableCell, Table, TableRow, TableBody, TableHead, TableContainer } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'

import HolidaysMenuStyle from './HolidaysMenuStyle.js'
import HMTable from './HMTable'

const useStyles = makeStyles(HolidaysMenuStyle)
function crd(Id, DataInceput, DataSfarsit, TipConcediu, Inlocuitor, Comentarii, StareConcedii) {
  return { Id, DataInceput, DataSfarsit, TipConcediu, Inlocuitor, Comentarii, StareConcedii }
}

function HolidaysMenu() {
  const RopVals=[
    1,
    2,
    3
  ]
  //console.log("HolidaysMenu"+RopVals)
  const [page, setPage] = useState(0)

  const [RopVal,setRopVal] = useState(3)
  const handleRopValChange=event=>{
    console.log(event.target.value)
    setRopVal(event.target.value)
  }
  const tipuriConcedii = [
    { id: 1, nume: 'Remote' },
    { id: 2, nume: 'Odihna' },
    { id: 3, nume: 'Medical' },
    { id: 4, nume: 'Neplatit' }
  ]
  const rows = [
    crd(1, '20/10/2020', '21/10/2020', 'Odihna', 'Miguel Gustavo', 'Concediu de odihna', 'Respins'),
    crd(2, '24/09/2021', '02/10/2021', 'Medical', 'Matei Mirel', 'Ma simt rau ', 'Aprobat'),
    crd(3, '20/10/2020', '21/10/2020', 'Odihna', 'Matei Mirel', 'Ma odihnesc', 'In asteptare'),
    crd(4, '20/10/2020', '21/10/2020', 'Medical', 'Matei Mirel', 'Sunt gripat', 'In asteptare'),
    crd(5, '20/10/2020', '21/10/2020', 'Medical', 'Popescu Ion', 'Mi-am rupt piciorul', 'In asteptare'),
    crd(6, '21/11/2020', '22/12/2020', 'Medical', 'Popescu Ion', 'Mi-am rupt mana', 'In asteptare'),
    crd(7, '23/11/2020', '24/12/2020', 'Medical', 'Popescu Ion', 'Mi-am rupt celalalta mana', 'In asteptare')
  ]

  return <HMTable RopVals={RopVals} page={page} setPage={setPage} rows={rows} rowsOnPage={RopVal} tipuriConcedii={tipuriConcedii} handleRopValChange={handleRopValChange} />
}

export default HolidaysMenu
