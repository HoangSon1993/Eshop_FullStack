import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/admin/Account'
import DashboardAdmin from '~/pages/admin/Dashboard'
import RegisterLayout from '~/layouts/RegisterLayout'
import AdminLayout from '~/layouts/AdminLayout'

export default function UserRouteElement() {
  const routeElements = useRoutes([
    // Area Customer
    {
      path: '/', // url : "/"
      element: <ProductList />
    },
    {
      path: '/login', // url: "/login"
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register', // url: "/register"
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },

    //Area : /admin/...
    {
      path: '/admin',
      element: <DashboardAdmin />
    },
    // /admin/accounts
    {
      path: '/admin/accounts',
      element: (
        <AdminLayout>
          <Account />
        </AdminLayout>
      )
    },
    {
      path: '/admin/accounts/:{id}',
      element: (
        <AdminLayout>
          <Account />
        </AdminLayout>
      )
    }
  ])

  return routeElements
}
