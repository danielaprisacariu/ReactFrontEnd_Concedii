import { gql } from '@apollo/client'

export const PUT_CERERE_CONCEDIU = gql`
  mutation inserareConcediu($input: ConcediuNou!) {
    inserareConcediu(input: $input)
  }
`
