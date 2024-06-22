import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/admin/Account'
import DashboardAdmin from '~/pages/admin/Dashboard'
import RegisterLayout from '~/layouts/RegisterLayout'
import AdminLayout from '~/layouts/AdminLayout'
import AccountDetail from '~/pages/admin/Account/AccountDetail.tsx'
import AccountCreate from '~/pages/admin/Account/AccountCreate.tsx'
import AccountEdit from '~/pages/admin/Account/AccountEdit.tsx'
import Product, { ProductCreate, ProductEdit } from '~/pages/admin/Product'

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
      children: [
        {
          path: '', // '/admin'
          element: <DashboardAdmin></DashboardAdmin>
        },
        {
          path: 'accounts',
          children: [
            { path: '', element: <Account /> },
            {
              path: 'create', // '/admin/create'
              element: <AccountCreate />
            },
            {
              path: 'detail/:id', // '/admin/detail/{id}'
              element: (
                <AdminLayout>
                  <AccountDetail />
                </AdminLayout>
              )
            },
            {
              path: 'edit/:id', // '/admin/edit/{id}'
              element: (
                <AdminLayout>
                  <AccountEdit />
                </AdminLayout>
              )
            }
          ]
        },
        {
          path: 'products',
          children: [
            {
              path: '',
              element: (
                <AdminLayout>
                  <Product />
                </AdminLayout>
              )
            },
            {
              path: 'create',
              element: (
                <AdminLayout>
                  <ProductCreate />
                </AdminLayout>
              )
            },
            {
              path: 'edit/:id',
              element: (
                <AdminLayout>
                  <ProductEdit />
                </AdminLayout>
              )
            }
          ]
        }
      ]
    }
  ])

  return routeElements
}
