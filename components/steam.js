import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../provider'

const Steam = () => {
  const theme = useContext(ThemeContext)
  const [strokeColor, setStrokeColor] = useState()

  useEffect(() => {
    let color
    theme.state.darkMode ? (color = '#77ABB7') : (color = '#1D3E53')
    setStrokeColor(color)
  }, [theme])

  return (
    <svg
      className="absolute lg:top-25 lg:left-70 top-12 left-25"
      width="22"
      height="18"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="one"
        d="M1.0255 21C1.0255 20.2356 0.860866 19.2617 1.36822 18.6471C1.84391 18.0707 2.26127 17.4595 2.7391 16.8824C3.851 15.5394 4.28801 13.6075 3.80534 11.8279C3.45926 10.5519 2.82991 9.4515 2.39638 8.21133C2.07057 7.27931 1.39883 6.08962 1.36822 5.07407C1.33374 3.92978 1.1424 2.78246 1.8823 1.98039C2.41806 1.39961 2.91219 1.33529 3.5959 1"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="two"
        d="M9.0255 21C9.0255 20.2356 8.86087 19.2617 9.36822 18.6471C9.84391 18.0707 10.2613 17.4595 10.7391 16.8824C11.851 15.5394 12.288 13.6075 11.8053 11.8279C11.4593 10.5519 10.8299 9.4515 10.3964 8.21133C10.0706 7.27931 9.39883 6.08962 9.36822 5.07407C9.33374 3.92978 9.1424 2.78246 9.8823 1.98039C10.4181 1.39961 10.9122 1.33529 11.5959 1"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="three"
        d="M18.0255 21C18.0255 20.2356 17.8609 19.2617 18.3682 18.6471C18.8439 18.0707 19.2613 17.4595 19.7391 16.8824C20.851 15.5394 21.288 13.6075 20.8053 11.8279C20.4593 10.5519 19.8299 9.4515 19.3964 8.21133C19.0706 7.27931 18.3988 6.08962 18.3682 5.07407C18.3337 3.92978 18.1424 2.78246 18.8823 1.98039C19.4181 1.39961 19.9122 1.33529 20.5959 1"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Steam
