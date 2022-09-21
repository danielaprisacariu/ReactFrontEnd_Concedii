function MyProfileReducer(state, action) {
  const { propertyName, value } = action

  switch (action.type) {
    case 'OnPropertyChange':
      return { ...state, [propertyName]: value }
    default:
      throw new Error()
  }
}

export default MyProfileReducer
