
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
            home
        </Layout>}
      />
      <Route path="/user-profile" element={<span>user prfile page</span>} />
      <Route path="*" element={<Navigate to='/' />} />
      <Route path="/" element={<span>Home page</span>} />
      <Route path="/" element={<span>Home page</span>} />
    </Routes>
  )
}

export default AppRoutes