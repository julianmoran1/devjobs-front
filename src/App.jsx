import './App.css'
import { lazy, Suspense } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
const HomePage = lazy(() => import('./pages/Home.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))
const ContactPage = lazy(() => import('./pages/Contact.jsx'))
const ProfilePage = lazy(() => import('./pages/Profile.jsx'))
const LoginPage = lazy(() => import('./pages/Login.jsx'))
const RegisterPage = lazy(() => import('./pages/Register.jsx'))

import { Routes, Route } from 'react-router'
import ProtectedRoute from './components/ProtectedRoute.jsx'
// import { AuthProvider } from './context/AuthContext.jsx'

function App() {

  return (
    <>
    {/* <AuthProvider> */}
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
            <Route path="/perfil" element={
              <ProtectedRoute redirectTo='/login'>
                <ProfilePage />
              </ProtectedRoute>
              } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    {/* </AuthProvider> */}
    </>
  )
}

export default App
