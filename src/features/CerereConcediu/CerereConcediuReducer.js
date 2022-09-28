import Moment from 'moment'

export const initialState = {
  tipConcediuId: null,
  dataInceput: Moment().format('YYYY-MM-DD'),
  dataSfarsit: Moment().format('YYYY-MM-DD'),
  inlocuitorId: null,
  comentarii: '',
  stareConcediuId: 1,
  angajatId: 24,
  zileConcediu: undefined
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
      if (propertyName === 'dataInceput') {
        if (value != null && state.dataSfarsit != null) {
          let dataInceput = Moment(value)
          let dataSfarsit = Moment(state.dataSfarsit)
          let dif = dataSfarsit.diff(dataInceput)
          let duration = Moment.duration(dif)
          let zileConcediu = duration.days()
          state = { ...state, zileConcediu: zileConcediu }
        }
      } else if (propertyName === 'dataSfarsit') {
        if (state.dataInceput != null && value != null) {
          let dataInceput = Moment(state.dataInceput)
          let dataSfarsit = Moment(value)
          let dif = dataSfarsit.diff(dataInceput)
          let duration = Moment.duration(dif)
          let zileConcediu = duration.days()
          state = { ...state, zileConcediu: zileConcediu }
        }
      }
      return { ...state, [propertyName]: value }
    default:
      throw new Error()
  }
}
