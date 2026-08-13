import AppRoutes from './AppRoutes'
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { BrowserRouter } from 'react-router-dom';
import './shared/style.scss'
import { PostContext } from './features/posts/post.context.jsx';
import { PostContextProvider } from './features/posts/post.context.jsx';
function App() {
  return (
    <AuthProvider>
      <PostContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
