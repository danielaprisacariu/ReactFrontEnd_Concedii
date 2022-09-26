import { gql } from '@apollo/client'

export const INPUT_NEW_ANGAJAT = gql`
  mutation newAngajat($input: NewAngajat!) {
    newAngajat(input: $input) {
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
