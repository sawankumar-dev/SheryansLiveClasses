import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth)
  if(isLoading) return <div className='h-screen bg-gray-700 text-white text-3xl flex justify-center items-center'><h1>Loading...</h1></div>
  if(!isAuthenticated) {
    return  <Navigate to="/auth" replace/>
  }
  return (
    <Outlet/>
  )
}

export default MainProtected