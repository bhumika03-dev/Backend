import AppRoutes from './AppRoutes'
import { AuthProvider } from "./features/auth/auth.context.jsx";
import './style.scss'

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
