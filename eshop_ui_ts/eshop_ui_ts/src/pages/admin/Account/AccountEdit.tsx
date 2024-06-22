import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface account {
  username: string
  password: string
  fullName: string
  address: string
  email: string
  phone: string
}
const AccountEdit = () => {
  let { id } = useParams()
  const navigate = useNavigate()
  const [account, setAccount] = useState<account>({
    phone: '',
    address: '',
    fullName: '',
    username: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    axios
      .get(`http://localhost:5220/api/Accounts/${id}`)
      .then((res) => setAccount(res.data))
      .catch((error) => {
        console.error('Da xay ra loi: ', error)
      })
  }, [id])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(account)
    axios
      .put(`http://localhost:5220/api/Accounts/${id}`, account)
      .then((res) => {
        console.log(res.data)
        navigate('/admin/accounts')
      })
      .catch((e) => console.warn(e))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAccount((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(account)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            User name
          </label>
          <input
            readOnly
            type='text'
            id='username'
            name='username'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='John'
            value={account.username}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor='company' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Company
          </label>
          <input
            type='password'
            id='company'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Flowbite'
            required
            value={account.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <label htmlFor='fullName' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Full name
          </label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Full Name'
            value={account.fullName}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor='address' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            address
          </label>
          <input
            type='text'
            id='address'
            name='address'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='address'
            value={account.address}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        {/*<div>*/}
        {/*  <label htmlFor='fullname' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>*/}
        {/*    Full name*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    type='text'*/}
        {/*    id='fullname'*/}
        {/*    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'*/}
        {/*    placeholder='fullname'*/}
        {/*    value={account.fullname}*/}
        {/*    onChange={(e) => handleChange(e)}*/}
        {/*  />*/}
        {/*</div>*/}

        <div>
          <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Phone
          </label>
          <input
            type='text'
            id='phone'
            name='phone'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='phone'
            value={account.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div className='mb-6'>
        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Email
        </label>
        <input
          name='email'
          type='email'
          id='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='example@example.com'
          value={account.email}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <input
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        value='Submit'
      />
    </form>
  )
}

export default AccountEdit
