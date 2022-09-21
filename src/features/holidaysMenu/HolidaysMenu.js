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
  const [page, setPage] = useState(0)
  const rowsOnPage = 1

  const rows = [
    crd(1, '20/10/2020', '21/10/2020', 'Odihna', 'Miguel Gustavo', 'Concediu de odihna', 'Respins'),
    crd(2, '24/09/2021', '02/10/2021', 'Medical', 'Matei Mirel', 'Ma simt rau ', 'Aprobat'),
    crd(3, '20/10/2020', '21/10/2020', 'Odihna', 'Matei Mirel', 'Ma odihnesc', 'In asteptare'),
    crd(4, '20/10/2020', '21/10/2020', 'Medical', 'Matei Mirel', 'Sunt gripat', 'In asteptare'),
    crd(5, '20/10/2020', '21/10/2020', 'Medical', 'Popescu Ion', 'Mi-am rupt piciorul', 'In asteptare')
  ]

  return <HMTable page={page} setPage={setPage} rows={rows} rowsOnPage={rowsOnPage} />
}

export default HolidaysMenu
