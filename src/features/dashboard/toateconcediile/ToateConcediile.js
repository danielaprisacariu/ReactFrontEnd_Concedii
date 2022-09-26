import React, { Fragment, useState } from 'react'
import { Table } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableContainer from '@material-ui/core/TableContainer'
import TabelHeader from './TabelHeader'
import TabelFooter from './TabelFooter'
import TabelBody from './TabelBody'
import SearchBar from './SearchBar'
import { useQueryWithErrorHandling } from 'hooks/errorHandling.js'
import { GET_CONCEDII_TOATE } from './TCQuerry'

const useStyles = makeStyles(ToateConcediileStyle)

function ToateConcediile() {
  const { data } = useQueryWithErrorHandling(GET_CONCEDII_TOATE, {
    onCompleted: data => {
      setFilteredArray(data?.ToateConcediileDATA)
    }
  })
  const RopVals = [5, 10, 15, 20]
  const [RopVal, setRopVal] = useState(5)
  const handleRopValChange = event => {
    console.log(event.target.value)
    setRopVal(event.target.value)
  }
  console.log(data)

  const [pagini, setPage] = useState(0)

  const classes = useStyles()

  const [filteredArray, setFilteredArray] = useState()
  console.log(filteredArray)
  const handleFilter = input => {
    const value = input.target.value
    const newArray = data?.ToateConcediileDATA.filter(el => {
      if (value === '') {
        return el
      } else {
        return (
          el.angajatPrenume.toLowerCase().includes(value) ||
          el.angajatNume.toLowerCase().includes(value) ||
          el.inlocuitorNume.toLowerCase().includes(value)
        )
      }
    })
    setFilteredArray(newArray)
    return
  }

  return (
    <>
      <SearchBar onFilter={handleFilter} />
      <TableContainer className={classes.Tabel}>
        <Table>
          <TabelHeader />
          <TabelBody miguel={filteredArray} page={pagini} RopVal={RopVal} />
          <TabelFooter
            miguelito={filteredArray}
            page={pagini}
            setPage={setPage}
            RopVals={RopVals}
            handleRopValChange={handleRopValChange}
            RopVal={RopVal}
          />
        </Table>
      </TableContainer>
    </>
  )
}

export default ToateConcediile
