import { gql } from '@apollo/client'

export const INPUT_NEW_ANGAJAT = gql`
  mutation newAngajat($input: NewAngajat!) {
    newAngajat(input: $input)
  }
`
