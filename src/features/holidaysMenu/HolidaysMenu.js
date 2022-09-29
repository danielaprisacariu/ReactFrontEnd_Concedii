import React, { useState } from 'react'
import { TableFooter, TableCell, Table, TableRow, TableBody, TableHead, TableContainer } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import HolidaysMenuStyle from './HolidaysMenuStyle.js'
import HMTable from './HMTable'
import SearchBar from '../dashboard/toateconcediile/SearchBar'
import { USER_DATA_QUERY } from './holidaysMenuComps/QUERYhm'
import { useQuery } from '@apollo/client'
import useUserData from 'utils/useData.js'

const useStyles = makeStyles(HolidaysMenuStyle)
function crd(Id, DataInceput, DataSfarsit, TipConcediu, Inlocuitor, Comentarii, StareConcedii) {
  return { Id, DataInceput, DataSfarsit, TipConcediu, Inlocuitor, Comentarii, StareConcedii }
}
//preluare date

function HolidaysMenu() {
  const user =useUserData()
  const id = user.id
  const [filteredArray, setFilteredArray] = useState()
  useQueryWithErrorHandling(USER_DATA_QUERY, {
    variables: { id: id },
    onCompleted: data => {
      setFilteredArray(data?.concediiData)
    }
  })

  const RopVals = [
    1, 5,

    10, 15, 20
  ]
  //console.log("HolidaysMenu"+RopVals)
  const [page, setPage] = useState(0)
  console.log(page)
  const [RopVal, setRopVal] = useState(5)
  const handleRopValChange = event => {
    setRopVal(event.target.value)
  }

  const handleFilter = input => {
    const value = input.target.value
    const newArray = filteredArray.filter(el => {
      if (value === '') {
        return el
      } else {
        return (
          el.Inlocuitor.toLowerCase().includes(value) ||
          el.TipConcediu.toLowerCase().includes(value) ||
          el.StareConcedii.toLowerCase().includes(value) ||
          el.Comentarii.toLowerCase().includes(value)
        )
      }
    })
    setFilteredArray(newArray)
    return
  }

  return (
    <>
      <SearchBar onFilter={handleFilter} />
      <HMTable
        RopVals={RopVals}
        page={page}
        setPage={setPage}
        rows={filteredArray}
        rowsOnPage={RopVal}
        handleRopValChange={handleRopValChange}
      />
    </>
  )
}

export default HolidaysMenu
