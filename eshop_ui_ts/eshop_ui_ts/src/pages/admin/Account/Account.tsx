import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '~/config/global.ts'

export interface Account {
  id: number
  username: string
  password: string
  email: string
  phone: string
}
const Account: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([])

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/Accounts`)
      .then((res) => {
        return setAccounts(res.data)
      })
      .catch((error) => console.error('Error fetching accounts: ', error))
  }, [])

  function handleDeleteAccount(id: number) {
    if (window.confirm(`Are you sure you want to delete account ${id}`)) {
      axios.delete(`${BASE_URL}/api/Accounts/${id}`).then((res) => {
        // Loại bỏ tài khoản đã xóa khỏi danh sách tài khoản hiện tại
        setAccounts(accounts.filter((account) => account.id !== id))
        console.log(res.data)
      })
    }
  }

  return (
    <Fragment>
      <div className='w-1 md:w-2/3 '>
        <h2 className='text-xl'>Account List</h2>
        <button
          type='button'
          className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          <Link to='create'>Create account</Link>
        </button>
        <table className='border-separate border border-slate-500 w-2/3 m-auto text-sm'>
          <thead className='text-zinc-200 bg-amber-950'>
            <tr>
              <th className='border border-slate-600'>Id</th>
              <th className='border border-slate-600'>Username</th>
              <th className='border border-slate-600'>Password</th>
              <th className='border border-slate-600'>Email</th>
              <th className='border border-slate-600'>Phone</th>
              <th className='border border-slate-600'>Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts?.map((item) => (
              <tr key={item.id}>
                <td className='border border-slate-700'>{item.id}</td>
                <td className='border border-slate-700'>{item.username}</td>
                <td className='border border-slate-700'>{item.password}</td>
                <td className='border border-slate-700'>{item.email}</td>
                <td className='border border-slate-700'>{item.phone}</td>
                <td className='border border-slate-700'>
                  <Link className='mr-2' to={`detail/${item.id}`}>
                    Detail
                  </Link>
                  <Link className='mr-2' to={`edit/${item.id}`}>
                    Edit
                  </Link>
                  <button onClick={() => handleDeleteAccount(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Account
