export const initialState = {
  id: 1,
  poza: './images/Natalia_Dyer_by_Gage_Skidmore.jpg',
  nume: 'Mitrut',
  prenume: 'Elena',
  cnp: ' 6010505407459',
  serie: 'RK',
  numar: '218754',
  dataNastere: '05/05/2001',
  email: 'elena.mitrut@totalsoft.ro',
  telefon: '0770976542',
  functie: 'manager',
  departament: 'dezvoltare',
  dataAngajare: '08/22/2022'
}

export function MyProfileReducer(state, action) {
  const { propertyName, value, angajatDB } = action

  switch (action.type) {
    case 'OnPropertyChange':
      return { ...state, [propertyName]: value }
    case 'OnUploadFromDB':
      return { state: angajatDB }
    default:
      throw new Error()
  }
}
