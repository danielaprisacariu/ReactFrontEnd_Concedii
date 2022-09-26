import { gql } from '@apollo/client'

export const GET_EMPLOYEE_BY_ID = gql`
  query angajat($id: Int!) {
    angajat(id: $id) {
      id
      nume
      prenume
      email
      parola
      dataAngajare
      dataNasterii
      cnp
      serie
      no
      nrTelefon
      # poza
      esteAdmin
      departament {
        denumire
      }
      functie {
        denumire
      }
      concediat
    }
  }
`
