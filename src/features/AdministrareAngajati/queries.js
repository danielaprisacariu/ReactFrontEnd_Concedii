import {gql} from '@apollo/client'

export const ANGAJATI_QUERY = gql`
query Query($id: Int) {
    angajatiData(id: $id) {
      id
      nume
    }
  }
`
export const MANAGERI_QUERY = gql`
query Query {
    manageriData {
      id
      nume
    }
  }
`
export const DEPARTAMENTE_QUERY = gql`
query Query {
    departamenteData {
      id
      nume
    }
  }
`

export const FUNCTII_QUERY = gql`
query Query {
    functiiData {
       id
       nume
     }
   }
`

