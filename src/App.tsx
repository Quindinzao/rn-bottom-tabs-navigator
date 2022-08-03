// External libraries
import React from 'react'

// Routes
import Routes from './routes'

// Contexts
import { AuthProvider } from './contexts/Auth'
import { ThemeProvider as ThemeProviderContext } from './contexts/Theme'

const App: React.FC = () => {
  return (
    <ThemeProviderContext>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProviderContext>
  )
}

export default App
