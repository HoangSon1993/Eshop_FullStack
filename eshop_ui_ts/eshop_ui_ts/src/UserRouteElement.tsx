import { useRoutes } from 'react-router-dom'
import ProductList from './pages/productList'
import Login from './pages/login'
import Register from './pages/Register'
import DashboardAdmin from './pages/admin/DashboardAdmin'
import Account from './pages/admin/Account'

export default function UserRouteElement() {
  const routeElement = useRoutes([
    // Area Customer
    {
      path: '/', // url : "/"
      element: <ProductList />
    },
    {
      path: '/login', // url: "/login"
      element: <Login />
    },
    {
      path: '/register', // url: "/register"
      element: <Register />
    },
    //Area : /admin/...
    {
      path: '/admins', // url: /admin/
      element: <DashboardAdmin />,
      children: [
        {
          path: 'accounts', // url: /admin/accounts
          element: <Account />
        }
      ]
    }
  ])

  return routeElement
}
