import Moment from 'moment'

export const initialState = {
  nume: '',
  prenume: '',
  cnp: '',
  serie: '',
  no: '',
  dataNasterii: Moment().format('YYYY-MM-DD'),
  email: '',
  nrTelefon: '',
  dataAngajare: Moment().format('YYYY-MM-DD'),
  managerId: 30,
  departamentId: 7,
  functieId: 5,
  parola: '',
  concediat: false
  // functii: [],
  // departamente: []
}
// export const fct = [
//   { id: 1, nume: 'Accountant' },
//   { id: 2, nume: 'Web Developer' },
//   { id: 3, nume: 'Consultant' },
//   { id: 4, nume: 'Analyst' },
//   { id: 5, nume: 'New Employee' },
//   { id: 6, nume: 'CEO' }
// ]

// export const department = [
//   { id: 1, nume: 'Finances' },
//   { id: 2, nume: 'Human Resources' },
//   { id: 3, nume: 'Marketing' },
//   { id: 4, nume: 'Sales' },
//   { id: 5, nume: 'Support' },
//   { id: 6, nume: 'Development' },
//   { id: 7, nume: 'New Employees' },
//   { id: 8, nume: 'Management' }
// ]
export function NewEmployeeReducer(state, action) {
  const { propertyName, value } = action

  switch (action.type) {
    case 'OnPropertyChange':
      return { ...state, [propertyName]: value }
    default:
      throw new Error()
  }
}
