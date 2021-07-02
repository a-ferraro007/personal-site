export const getInitialTheme = () => {
  if (process.browser) {
    if (
      window.localStorage.theme ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      console.log('tere')
      return { darkMode: true }
    } else {
      return { darkMode: false }
    }
  }
}
