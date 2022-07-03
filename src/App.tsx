// External libraries
import React from 'react'

// Routes
import Routes from './routes'

// Contexts
import { AuthProvider } from './contexts/Auth'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
