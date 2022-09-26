import { gql } from '@apollo/client'

export const GET_ALL_EMPLOYEE = gql`
  query angajati {
    angajati {
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
      poza
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
