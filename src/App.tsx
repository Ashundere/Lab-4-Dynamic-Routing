
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import LoginPage from './pages/LogInPage/LogInPage'
import BlogPostPage from './pages/BlogPostPage/BlogPostPage'
import { AppProviders } from './components/AppProviders/AppProviders'
import BlogIndexPage from './pages/BlogIndexPage/BlogIndexPage'
import "./App.css"
import NavBar from './components/NavBar/NavBar'


function App() {

  return (
    <>
      <AppProviders>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blogs" element={<BlogIndexPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/blogs/:slug" element={<BlogPostPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </AppProviders>
    </>
  )
}

export default App
