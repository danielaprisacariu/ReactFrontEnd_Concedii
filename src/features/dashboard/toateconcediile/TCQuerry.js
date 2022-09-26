import { gql } from '@apollo/client'

export const GET_CONCEDII_TOATE = gql`
  query toateConcediileDATA {
    toateConcediileDATA {
      id
      angajatNume
      angajatPrenume
      dataInceput
      dataSfarsit
      stareConcediu
      tipConcediuNume
      inlocuitorNume
    }
  }
`
