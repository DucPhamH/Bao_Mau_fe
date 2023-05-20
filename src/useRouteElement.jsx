import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import RegisterLayout from './Layout/RegisterLayout'
import Home from './page/Home'
import Login from './page/Login'
import Profile from './page/Profile'
import Register from './page/Register'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

// function ProtectedRoute() {
//   const { isAuthenticated } = useContext(AppContext)
//   return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
// }

// function RejectedRoute() {
//   const { isAuthenticated } = useContext(AppContext)
//   return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
// }

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: 'login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: 'register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
    // {
    //   path: '',
    //   element: <MainLayout />,
    //   children: [
    //     {
    //       path: 'login',
    //       element: (
    //         <RegisterLayout>
    //           <Login />
    //         </RegisterLayout>
    //       )
    //     },
    //     {
    //       path: 'register',
    //       element: (
    //         <RegisterLayout>
    //           <Register />
    //         </RegisterLayout>
    //       )
    //     }
    //   ]
    // }
    // {
    //   path: '',
    //   element: <ProtectedRoute />,
    //   children: [
    //     {
    //       path: 'profile',
    //       element: (
    //         <MainLayout>
    //           <Profile />
    //         </MainLayout>
    //       )
    //     }
    //   ]
    // }
  ])
  return routeElement
}
