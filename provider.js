import { getInitialTheme } from './helper'
import themeReducer from './reducer'
import { createContext, useReducer, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, getInitialTheme())

  const setTheme = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', true)
    } else if (darkMode === false) {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', false)
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
