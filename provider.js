import { getInitialTheme } from './helper'
import themeReducer from './reducer'

const { createContext, useReducer, useEffect } = require('react')

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, getInitialTheme())

  const setTheme = (darkMode) => {
    console.log(darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
      if (!window.localStorage.theme) window.localStorage.setItem('theme', true)
    } else if (!darkMode) {
      document.documentElement.classList.remove('dark')
      if (window.localStorage.theme) window.localStorage.removeItem('theme')
    }
  }

  useEffect(() => {
    setTheme(state.darkMode)
  }, [state])

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
