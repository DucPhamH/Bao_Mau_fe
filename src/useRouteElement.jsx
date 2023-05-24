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
import JobDetail from './page/JobDetail'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

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
      path: 'employeelist',
      element: (
        <Mainlayout>
          <EmployeeList />
        </Mainlayout>
      )
    },

    {
      path: '',
      element: <RejectedRoute />,
      children: [
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
      ]
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
      path: 'jobdetail',
      element: (
        <MainLayout>
          <JobDetail />
        </MainLayout>
      )
    }
  ])
  return routeElement
}
