import { gql } from '@apollo/client'

export const AUTHENTICATE_USER = gql`
  query UserInfo($Email: String, $Parola: String) {
    newUserData(Email: $Email, Parola: $Parola) {
      Email
      Parola
      id
      isAdmin
    }
  }
`
