import Moment from 'moment'

export const initialState = {
  LastName: null,
  FirstName: null,
  NIC: null,
  Series: null,
  CardNumber: null,
  DateOfBirth: Moment().format('YYYY-MM-DD'),
  Email: null,
  PhoneNumber: null,
  DateOfEmployment: Moment().format('YYYY-MM-DD'),
  Department: null,
  Function: null,
  Password: null
}
export const fct = [
  { id: 1, nume: 'Web Developer' },
  { id: 2, nume: 'Accountant' },
  { id: 3, nume: 'Consultant' },
  { id: 4, nume: 'Analyst' },
  { id: 5, nume: 'New Employee' },
  { id: 6, nume: 'Manager' },
  { id: 7, nume: 'CEO' }
]

export const department = [
  { id: 1, nume: 'Finances' },
  { id: 2, nume: 'Development' },
  { id: 3, nume: 'Human Resources' },
  { id: 4, nume: 'Support' },
  { id: 5, nume: 'Sales' },
  { id: 6, nume: 'Marketing' },
  { id: 7, nume: 'New Employees' },
  { id: 8, nume: 'Management' }
]
export function NewEmployeeReducer(state, action) {
  const { propertyName, value } = action

  switch (action.type) {
    case 'OnPropertyChange':
      return { ...state, [propertyName]: value }
    default:
      throw new Error()
  }
}
