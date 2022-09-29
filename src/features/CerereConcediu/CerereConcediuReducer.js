import Moment from 'moment'
import { useState } from 'react'

function ZileConcediu(firstDay, lastDay) {
  let year = 2022
  let holidays = []
  holidays.push(new Date(year, 1, 1)) // Anul nou
  holidays.push(new Date(year, 1, 2)) // Anul nou
  holidays.push(new Date(year, 1, 24)) // Unirea principatelor
  holidays.push(new Date(year, 5, 1)) // Ziua muncii
  holidays.push(new Date(year, 6, 1)) // Ziua copilului
  holidays.push(new Date(year, 8, 15)) // Adormirea Maicii Domnului
  holidays.push(new Date(year, 11, 30)) // Sfantul Andrei
  holidays.push(new Date(year, 12, 1)) // Ziua Nationala a Romaniei
  holidays.push(new Date(year, 12, 25)) // Prima zi de Craciun
  holidays.push(new Date(year, 12, 26)) // A doua zi de Craciun

  let firstDay1 = firstDay.getTime()
  let lastDay1 = lastDay.getTime()
  let dif = lastDay1 - firstDay1
  let zileConcediu = dif / (1000 * 3600 * 24) + 1

  let fullWeekCount = Math.floor(zileConcediu / 7)
  if (zileConcediu > fullWeekCount * 7) {
    let firstDayOfWeek = firstDay.getDay()
    let lastDayOfWeek = lastDay.getDay()
    firstDayOfWeek = firstDayOfWeek == 0 ? 7 : firstDayOfWeek
    if (lastDayOfWeek < firstDayOfWeek) lastDayOfWeek += 7
    if (firstDayOfWeek <= 6) {
      if (lastDayOfWeek >= 7) zileConcediu -= 2 // Altfel scadem doar sambata si duminica
      else if (lastDayOfWeek >= 6) zileConcediu -= 1
    } else if (firstDayOfWeek <= 7 && lastDayOfWeek >= 7)
      // Scadem doar duminica
      zileConcediu -= 1
  }
  zileConcediu -= fullWeekCount + fullWeekCount

  for (let bankHoliday in holidays) {
    let bh = new Date(bankHoliday)
    let bhString = bh
    if (firstDay <= bh && bh <= lastDay && bhString.DayOfWeek != 6 && bhString.DayOfWeek != 0) zileConcediu--
  }
  return zileConcediu
}

export const initialState = {
  tipConcediuId: null,
  dataInceput: Moment().format('YYYY-MM-DD'),
  dataSfarsit: Moment().format('YYYY-MM-DD'),
  inlocuitorId: null,
  comentarii: '',
  stareConcediuId: 1,
  angajatId: 24,
  zileConcediu: undefined
}

export const tipuriConcedii = [
  { id: 1, nume: 'Remote' },
  { id: 2, nume: 'Odihna' },
  { id: 3, nume: 'Medical' },
  { id: 4, nume: 'Neplatit' }
]

export const inlocuitori = [
  { id: 23, nume: 'Popa Dorin' },
  { id: 25, nume: 'Radu Ionescu' }
]

export function CerereConcediuReducer(state, action) {
  const { propertyName, value } = action

  switch (action.type) {
    case 'OnPropertyChange':
      if (propertyName === 'dataInceput') {
        if (value != null && state.dataSfarsit != null) {
          let dataInceput = new Date(value)
          let dataSfarsit = new Date(state.dataSfarsit)

          let zileConcediu = ZileConcediu(dataInceput, dataSfarsit)
          state = { ...state, zileConcediu: zileConcediu }
        }
      } else if (propertyName === 'dataSfarsit') {
        if (state.dataInceput != null && value != null) {
          let dataInceput = new Date(state.dataInceput)
          let dataSfarsit = new Date(value)

          let zileConcediu = ZileConcediu(dataInceput, dataSfarsit)
          state = { ...state, zileConcediu: zileConcediu }
        }
      }

      return { ...state, [propertyName]: value }
    default:
      throw new Error()
  }
}
