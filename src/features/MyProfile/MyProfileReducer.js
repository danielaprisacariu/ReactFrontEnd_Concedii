export const initialState = {
  id: 1,
  poza: '', //'./images/Natalia_Dyer_by_Gage_Skidmore.jpg',
  nume: '',
  prenume: '',
  cnp: '',
  serie: '',
  no: '',
  dataNasterii: '',
  email: '',
  nrTelefon: '',
  functie: '',
  departament: '',
  dataAngajare: ''
}

export function MyProfileReducer(state, action) {
  const { propertyName, value } = action

  console.log(value)
  switch (action.type) {
    case 'OnPropertyChange':
      if (propertyName == 'nrTelefon') {
        if (value.length != 10) {
          console.log('nrtel mic')
        }
      }
      return { ...state, [propertyName]: value }
    case 'OnUploadFromDB':
      return { ...state, ...value }
    default:
      throw new Error()
  }
}
