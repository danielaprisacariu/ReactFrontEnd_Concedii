export const initialState = {
  userName: null,
  password: null,
  isSaving: false
}

export function reducer(state, action) {
  switch (action.type) {
    case 'OnPropertyChanged':
      return onPropertyChanged(state, action)
    case 'aMErs':
      return { ...state, isSaving: true }
    case 'reset':
      return { ...state, isSaving: false }

    default:
      return state
  }
}

function onPropertyChanged(state, action) {
  const { propertyName, value } = action
  return { ...state, [propertyName]: value }
}
