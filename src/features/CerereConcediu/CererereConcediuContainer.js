import React, { Fragment } from 'react'
import CererereConcediuCard from './CererereConcediuCard'

export default function CererereConcediuContainer() {
  return (
    <>
      <CererereConcediuCard tipuriConcedii={tipuriConcedii} inlocuitori={inlocuitori}></CererereConcediuCard>
    </>
  )
}

const tipuriConcedii = [
  { id: 1, nume: 'Remote' },
  { id: 2, nume: 'Odihna' },
  { id: 3, nume: 'Medical' },
  { id: 4, nume: 'Neplatit' }
]

const inlocuitori = [
  { id: 1, nume: 'Popa Dorin' },
  { id: 2, nume: 'Radu Ionescu' }
]
