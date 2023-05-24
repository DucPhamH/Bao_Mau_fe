import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import RegisterLayout from './Layout/RegisterLayout'
import Home from './page/Home'
import Login from './page/Login'
import Profile from './page/Profile'
import Register from './page/Register'
import EmployeeList from './page/EmployeeList'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import Mainlayout from './Layout/MainLayout/MainLayout'
import UserInfo from './page/UserInfo'

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
    },
    {
      path: 'profile',
      element: (
        <Mainlayout>
          <Profile />
        </Mainlayout>
      )
    },
    {
      path: 'employeelist',
      element: (
        <Mainlayout>
          <EmployeeList />
        </Mainlayout>
      )
    },
    {
      path: 'userinfo',
      element: (
        <Mainlayout>
          <UserInfo />
        </Mainlayout>
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
