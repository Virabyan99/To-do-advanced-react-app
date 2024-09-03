import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
		clientId="ee733623737f438388346951a53b1a58"
		domain="https://todoappforfree.kinde.com"
		redirectUri="https://to-do-advanced-react-app.vercel.app/"
		logoutUri="https://to-do-advanced-react-app.vercel.app/"
	>

    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </KindeProvider>
  </React.StrictMode>
)
