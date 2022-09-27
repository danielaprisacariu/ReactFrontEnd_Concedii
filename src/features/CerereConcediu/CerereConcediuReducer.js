import Moment from 'moment'
export const initialState = {
  tipConcediuId: null,
  dataInceput: Moment().format('YYYY-MM-DD'),
  dataSfarsit: null,
  inlocuitorId: null,
  comentarii: null,
  stareConcediuId: 1,
  angajatId: 24,
  zileConcediu: null
}

export const tipuriConcedii = [
  { id: 1, nume: 'Remote' },
  { id: 2, nume: 'Odihna' },
  { id: 3, nume: 'Medical' },
  { id: 4, nume: 'Neplatit' }
]

export const inlocuitori = [
  { id: 23, nume: 'Popa Dorin' },
  { id: 25, nume: 'Radu Ionescu' }
]

export function CerereConcediuReducer(state, action) {
  const { propertyName, value } = action

  switch (action.type) {
    case 'OnPropertyChange':
      return { ...state, [propertyName]: value }
    default:
      throw new Error()
  }
}
