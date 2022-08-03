// External libraries
import React, { createContext, useState } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components/native'

// Styled
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

export enum ThemeType {
  darkTheme = 'darkTheme',
  lightTheme = 'lightTheme',
}

const themes = {
  darkTheme: dark,
  lightTheme: light,
}

export const ThemeContext = createContext({
  theme: ThemeType.darkTheme,
  toggleTheme: () => {},
})

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.darkTheme)
  const toggleTheme = () => {
    if (theme === ThemeType.darkTheme) {
      setTheme(ThemeType.lightTheme)
    } else {
      setTheme(ThemeType.darkTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}
