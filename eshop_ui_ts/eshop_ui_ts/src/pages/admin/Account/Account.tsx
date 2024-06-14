import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
interface Account {
  id: number
  username: string
  password: string
  email: string
  phone: string
}
const Account: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([])

  useEffect(() => {
    return () => {
      axios
        .get('http://localhost:5220/api/Accounts')
        .then((res) => {
          console.log(res.data)
          return setAccounts(res.data)
        })
        .catch((error) => console.error('Error fetching accounts: ', error))
    }
  }, [])
  return (
    <Fragment>
      <h2>Tất cả các tài khoản</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {accounts?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default Account
