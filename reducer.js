const themeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHTMODE':
      return { darkMode: false }
      break
    case 'DARKMODE':
      return { darkMode: true }
    default:
      return state
      break
  }
}

export default themeReducer
