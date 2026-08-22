import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Feed from "./features/posts/pages/Feed";
import CreatePost from "./features/posts/pages/CreatePost"
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}

export default AppRoutes
