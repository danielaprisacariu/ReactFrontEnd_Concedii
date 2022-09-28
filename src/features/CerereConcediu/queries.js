import { gql } from '@apollo/client'

export const PUT_CERERE_CONCEDIU = gql`
  mutation inserareConcediu($input: ConcediuNou!) {
    inserareConcediu(input: $input)
  }
`
export const GET_INLOCUITORI = gql`
  query angajatiNumeConcatenat($idM: Int!, $angajatiNumeConcatenatId: Int!) {
    angajatiNumeConcatenat(idM: $idM, id: $angajatiNumeConcatenatId) {
      id
      nume
      managerId
    }
  }
`
export const GET_TIP_CONCEDII = gql`
  query tipConcedii {
    tipConcedii {
      id
      nume
      cod
      zileTotaleConcediu
    }
  }
`

export const GET_ZILE_RAMASE = gql`
  query zileRamase($zileRamaseId: Int, $tipConcediuId: Int) {
    zileRamase(id: $zileRamaseId, tipConcediuId: $tipConcediuId)
  }
`
