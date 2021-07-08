export const getInitialTheme = () => {
  if (process.browser) {
    if (
      window.localStorage.theme === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return { darkMode: true }
    } else {
      return { darkMode: false }
    }
  }
}
