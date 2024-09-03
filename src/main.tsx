import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
		clientId="c357d34286af41cbb3b0be26e0f44cc8"
		domain="https://todoappforfree.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	>

    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </KindeProvider>
  </React.StrictMode>
)
