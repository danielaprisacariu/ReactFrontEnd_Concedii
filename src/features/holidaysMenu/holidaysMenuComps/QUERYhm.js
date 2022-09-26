import {gql} from '@apollo/client'

export const USER_DATA_QUERY = gql`
query ConcediiData($id: Int) {
    concediiData(id: $id) {
      id
      dataInceput
      dataSfarsit
      comentarii
      stareConcediuNume
      tipConcediuNume
      inlocuitorNume
    }
  }
`
