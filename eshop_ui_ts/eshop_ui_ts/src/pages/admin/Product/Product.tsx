import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '~/config/global.ts'
import ModalConfirm from '~/components/modal/ModalConfirm.tsx'

interface Product {
  id: number
  sku: string
  name: string
  description: string
  price: number
  stock: number
  image: string
  productTypeId: number
  status: boolean
}

interface ProductType {
  id: number
  name: string
  status: boolean
}
function Product() {
  // State lưu danh sách sản phẩm
  const [products, setProducts] = useState<Product[]>([])

  //State lưu danh sách ProductType
  const [productTypes, setProductTypes] = useState<ProductType[]>([])

  // State ẩn hiện model
  const [showModalDetail, setShowModalDetail] = useState<boolean>(false)
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false)
  const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false)

  // State lưu product được chọn
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    description: '',
    productTypeId: 0,
    id: 0,
    name: '',
    price: 0,
    sku: '',
    stock: 0,
    image: '',
    status: true
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(selectedProduct)
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(selectedProduct)
  }

  useEffect(() => {
    // Call API get All Products
    axios
      .get(`${BASE_URL}/api/Products`)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((e) => console.log(e))

    // Call API get All ProductType
    axios
      .get(`${BASE_URL}/api/ProductTypes`)
      .then((res) => {
        setProductTypes(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

  function handleCreate() {
    if (selectedProduct.id === 0) {
      // Case Create product
      axios
        .post(`${BASE_URL}/api/Products`, selectedProduct)
        .then((res) => setProducts((prevState) => [...prevState, res.data]))
        .catch((e) => console.log(e))
    } else {
      // Case Update Product
      axios.put(`${BASE_URL}/api/Products/${selectedProduct.id}`, selectedProduct).then(() =>
        setProducts((prevState) => {
          const newProducts = [...prevState]
          const index = newProducts.findIndex((p) => p.id === selectedProduct.id)
          newProducts[index] = selectedProduct
          return newProducts
        })
      )
    }
  }

  function handleDelete(item: Product) {
    axios
      .delete(`${BASE_URL}/api/products/${item.id}`)
      .then(() => {
        setProducts((prevState) => {
          const newProducts = prevState.filter((p) => p.id !== item.id)
          return newProducts
        })
      })
      .catch((error) => console.error('Có lỗi xảy ra khi xoá sản phẩm: ', error))
  }

  return (
    <div className='container py-2'>
      <div className='xl:max-w-6xl'>
        <h1 className='text-3xl my-6 font-bold'>Product Management</h1>
        <button
          className='bg-pink-400 text-white active:bg-pink-700 font-bold uppercase text-sm px-6 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none my-4 ease-linear transition-all duration-150'
          type='button'
          onClick={() => {
            setSelectedProduct({
              description: '',
              productTypeId: 0,
              id: 0,
              name: '',
              price: 0,
              sku: '',
              stock: 0,
              image: '',
              status: true
            })
            setShowModalCreate(true)
          }}
        >
          Create Product
        </button>
        <table className='table-auto m-auto'>
          <thead className='bg-gray-100'>
            <tr>
              <td>Image</td>
              <td className='px-4 py-2'>Name</td>
              <td className='px-4 py-2'>Description</td>
              <td className='px-4 py-2'>Price</td>
              <td className='px-4 py-2'>Stock</td>
              <td className='px-4 py-2'>Price</td>
              <td className='px-4 py-2'>Action</td>
            </tr>
          </thead>
          <tbody>
            {products?.map((item) => (
              <tr key={item.id}>
                <td className='border px-4 py-2'>
                  <img className='max-h-20 object-cover' src={`${BASE_URL}/images/product/${item.image}`} alt='' />
                </td>
                <td className='border px-4 py-2'>{item.sku}</td>
                <td className='border px-4 py-2'>{item.name}</td>
                <td className='border px-4 py-2'>{item.description}</td>
                <td className='border px-4 py-2'>{item.price}</td>
                <td className='border px-4 py-2'>{item.stock}</td>
                <td className='border px-4 py-2'>
                  <div className='flex gap-2 justify-center align-middle'>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                      onClick={() => {
                        setShowModalDetail(true)
                        setSelectedProduct(item)
                      }}
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProduct(item)
                        setShowModalCreate(true)
                      }}
                      className='bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded'
                    >
                      Edit
                    </button>
                    <button
                      // onClick={() => handleDelete(item)}
                      onClick={() => {
                        setSelectedProduct(item)
                        setShowModalConfirm(true)
                      }}
                      className='bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ===== modal: Product Detail ===== */}
        <>
          {showModalDetail ? (
            <>
              <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                  {/*content*/}
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                    {/*header*/}
                    <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                      <h3 className='text-3xl font-semibold'>{selectedProduct.name}</h3>
                      <button
                        className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                        onClick={() => setShowModalDetail(false)}
                      >
                        <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className='relative p-6 flex-auto'>
                      <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
                        Tác giả: {selectedProduct.description}
                      </p>
                    </div>{' '}
                    <div className='relative p-6 flex-auto flex justify-around'>
                      <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>Price: {selectedProduct.price}d</p>
                      <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>Stock: {selectedProduct.stock}</p>
                    </div>
                    {/*footer*/}
                    <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                      <button
                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='button'
                        onClick={() => setShowModalDetail(false)}
                      >
                        Close
                      </button>
                      <button
                        className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='button'
                        onClick={() => setShowModalDetail(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
            </>
          ) : null}
        </>

        {/* ===== modal: Create Product ===== */}
        <>
          {showModalCreate ? (
            <>
              <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                  {/*content*/}
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                    {/*header*/}
                    <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                      <h3 className='text-3xl text-center font-semibold'>
                        {selectedProduct.id === 0 ? 'Create Product' : 'Edit Product'}
                      </h3>
                      <button
                        className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:bg-blue-900 hover:text-white'
                        onClick={() => setShowModalCreate(false)}
                      >
                        <span className='bg-transparent text-blackopacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none leading-[100%]'>
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <form className='w-full max-w-lg py-4 px-2'>
                      <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                          <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='sku'
                            name='sku'
                            type='text'
                            placeholder='sku'
                            onChange={(e) => handleChange(e)}
                            value={selectedProduct.sku}
                          />
                        </div>
                      </div>

                      <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                          <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='name'
                            name='name'
                            type='text'
                            placeholder='name'
                            onChange={(e) => handleChange(e)}
                            value={selectedProduct.name}
                          />
                        </div>
                      </div>

                      <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                          <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='description'
                            name='description'
                            type='text'
                            placeholder='description'
                            onChange={(e) => handleChange(e)}
                            value={selectedProduct.description}
                          />
                        </div>
                      </div>

                      <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                          <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='price'
                            name='price'
                            type='number'
                            placeholder='price'
                            min='0'
                            onChange={(e) => handleChange(e)}
                            value={selectedProduct.price}
                          />
                        </div>
                      </div>

                      <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                          <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='stock'
                            name='stock'
                            type='number'
                            placeholder='stock'
                            min='0'
                            onChange={(e) => handleChange(e)}
                            value={selectedProduct.stock}
                          />
                        </div>
                      </div>

                      {/*Product Type                      */}

                      <div>
                        <label
                          htmlFor='productType'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                          Select Product Type
                        </label>
                        <select
                          id='productType'
                          name='productTypeId'
                          className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          defaultValue='0'
                          onChange={handleSelect}
                          value={selectedProduct.productTypeId}
                        >
                          <option value='0' disabled>
                            Choose a productType
                          </option>
                          {productTypes?.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>
                    {/*footer*/}
                    <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                      <button
                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='button'
                        onClick={() => setShowModalCreate(false)}
                      >
                        Close
                      </button>
                      <button
                        className='bg-emerald-500 text-white active:bg-emerald-600 font-bold disabled:bg-emerald-100 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='button'
                        onClick={() => {
                          handleCreate()
                          setShowModalCreate(false)
                        }}
                        disabled={selectedProduct.productTypeId == 0 ? true : false}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
            </>
          ) : null}
        </>

        {/* ====== Modal confirm delete ====== */}
        <ModalConfirm
          open={showModalConfirm}
          setOpen={setShowModalConfirm}
          item={selectedProduct}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default Product
