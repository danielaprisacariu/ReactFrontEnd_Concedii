export const initialState = {
  LastName: null,
  FirstName: null,
  NIC: null,
  Series: null,
  CardNumber: null,
  PhoneNumber: null,
  DatOfEmployment: null,
  Department: null,
  Function: null,
  Comments: null
}

export function reducer(state, action) {
  switch (action.type) {
    case 'OnPropertyChanged':
      return OnPropertyChanged(state, action)

    default:
      throw new Error()
  }
}

function OnPropertyChanged(state, action) {
  const { propertyName, value } = action

  return { ...state, [propertyName]: value }
}
