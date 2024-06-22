import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface Account {
  id: number
  username: string
  password: string
  email: string
  phone: string
}
const AccountDetail = () => {
  const [account, setAccount] = useState<Account | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5220/api/Accounts/${id}`)
        .then((res) => setAccount(res.data))
        .catch((error) => {
          console.error('Đã có lỗi xảy ra: ', error)
          setError('Đã có lỗi xảy ra khi lấy thông tin tài khoản!')
        })
    } else {
    }
  }, [id])
  if (error) {
    return <h1>Đã xảy ra lỗi: {error}</h1>
  } else {
    return (
      <div>
        <h1>Tai khoan co thong tin {id}</h1>
        <dl>UserName</dl>
        <dd>{account?.username}</dd>

        <dl>Password</dl>
        <dd>{account?.password}</dd>

        <dl>Phone</dl>
        <dd>{account?.phone}</dd>
        <dl>Email</dl>
        <dd>{account?.email}</dd>
      </div>
    )
  }
}

export default AccountDetail
