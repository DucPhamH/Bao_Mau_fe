import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import RegisterLayout from './Layout/RegisterLayout'
import Home from './page/Home'
import Login from './page/Login'
import UserProfile from './page/UserProfile'
import Register from './page/Register'
import EmployeeList from './page/EmployeeList'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import Mainlayout from './Layout/MainLayout/MainLayout'
import JobDetail from './page/JobDetail'
import EmployeeInfo from './page/EmployeeInfo'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

function RoleProtectedRouter() {
  const { info } = useContext(AppContext)
  const check = Boolean(info.roles === 1)
  console.log(check)
  return check ? <Outlet /> : <Navigate to='/' />
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
    },{
            path: 'userprofile',
            element: (
              <MainLayout>
                <UserProfile />
              </MainLayout>
            )
          },

    // {
    //   path: 'employeelist',
    //   element: (
    //     <Mainlayout>
    //       <EmployeeList />
    //     </Mainlayout>
    //   )
    // },

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
    // {
    //   path: '',
    //   element: <ProtectedRoute />,
    //   children: [
    //     {
    //       path: 'userprofile',
    //       element: (
    //         <MainLayout>
    //           <UserProfile />
    //         </MainLayout>
    //       )
    //     }
    //   ]
    // },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <RoleProtectedRouter />,
          children: [
            {
              path: 'employeelist',
              element: (
                <Mainlayout>
                  <EmployeeList />
                </Mainlayout>
              )
            }
          ]
        }
      ]

      // path: '',
      // element: <RoleProtectedRouter />,
      // children: [
      //   {
      //     path: 'employeelist',
      //     element: (
      //       <Mainlayout>
      //         <EmployeeList />
      //       </Mainlayout>
      //     )
      //   }
      // ]
    },
    // {
    //   path: 'employeelist',
    //   element: (
    //     <Mainlayout>
    //       <EmployeeList />
    //     </Mainlayout>
    //   )
    // },
    {
      path: 'jobdetail',
      element: (
        <MainLayout>
          <JobDetail />
        </MainLayout>
      )
    },
    {
      path: 'employeeinfo',
      element: (
        <MainLayout>
          <EmployeeInfo />
        </MainLayout>
      )
    }
  ])
  return routeElement
}
