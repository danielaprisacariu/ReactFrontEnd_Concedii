import React, { Fragment } from 'react'
import CererereConcediuCard from './CererereConcediuCard'

export default function CererereConcediuContainer() {
  const tipuriConcedii = [
    { id: 1, nume: 'Concediu de odihna' },
    { id: 2, name: 'Concediu medical' }
  ]

  return (
    <>
      <CererereConcediuCard tipuriConcedii={tipuriConcedii}></CererereConcediuCard>
    </>
  )
}
