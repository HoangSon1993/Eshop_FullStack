// import React from 'react'
//
// const ModalCreateProduct = ({props}) =>{
//     const{showModalCreate, setShowModalCreate, selectedProduct, handleChange, handleSelect, productTypes, handleCreate} = props
//   return(
//     <>
//       {showModalCreate ? (
//         <>
//           <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
//             <div className='relative w-auto my-6 mx-auto max-w-3xl'>
//               {/*content*/}
//               <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
//                 {/*header*/}
//                 <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
//                   <h3 className='text-3xl text-center font-semibold'>Create Product</h3>
//                   <button
//                     className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:bg-blue-900 hover:text-white'
//                     onClick={() => setShowModalCreate(false)}
//                   >
//                         <span className='bg-transparent text-blackopacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none leading-[100%]'>
//                           ×
//                         </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <form className='w-full max-w-lg py-4 px-2'>
//                   <div className='flex flex-wrap -mx-3 mb-6'>
//                     <div className='w-full px-3'>
//                       <input
//                         className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                         id='sku'
//                         name='sku'
//                         type='text'
//                         placeholder='sku'
//                         onChange={(e) => handleChange(e)}
//                         value={selectedProduct.sku}
//                       />
//                     </div>
//                   </div>
//
//                   <div className='flex flex-wrap -mx-3 mb-6'>
//                     <div className='w-full px-3'>
//                       <input
//                         className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                         id='name'
//                         name='name'
//                         type='text'
//                         placeholder='name'
//                         onChange={(e) => handleChange(e)}
//                         value={selectedProduct.name}
//                       />
//                     </div>
//                   </div>
//
//                   <div className='flex flex-wrap -mx-3 mb-6'>
//                     <div className='w-full px-3'>
//                       <input
//                         className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                         id='description'
//                         name='description'
//                         type='text'
//                         placeholder='description'
//                         onChange={(e) => handleChange(e)}
//                         value={selectedProduct.description}
//                       />
//                     </div>
//                   </div>
//
//                   <div className='flex flex-wrap -mx-3 mb-6'>
//                     <div className='w-full px-3'>
//                       <input
//                         className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                         id='price'
//                         name='price'
//                         type='number'
//                         placeholder='price'
//                         min='0'
//                         onChange={(e) => handleChange(e)}
//                         value={selectedProduct.price}
//                       />
//                     </div>
//                   </div>
//
//                   <div className='flex flex-wrap -mx-3 mb-6'>
//                     <div className='w-full px-3'>
//                       <input
//                         className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                         id='stock'
//                         name='stock'
//                         type='number'
//                         placeholder='stock'
//                         min='0'
//                         onChange={(e) => handleChange(e)}
//                         value={selectedProduct.stock}
//                       />
//                     </div>
//                   </div>
//
//                   {/*Product Type                      */}
//
//                   <div>
//                     <label
//                       htmlFor='productType'
//                       className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
//                     >
//                       Select Product Type
//                     </label>
//                     <select
//                       id='productType'
//                       name='productTypeId'
//                       className='bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//                       defaultValue='0'
//                       onChange={handleSelect}
//                       value={selectedProduct.productTypeId}
//                     >
//                       <option value='0' disabled>
//                         Choose a productType
//                       </option>
//                       {productTypes?.map((item) => (
//                         <option key={item.id} value={item.id}>
//                           {item.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </form>
//                 {/*footer*/}
//                 <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
//                   <button
//                     className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
//                     type='button'
//                     onClick={() => setShowModalCreate(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className='bg-emerald-500 text-white active:bg-emerald-600 font-bold disabled:bg-emerald-100 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
//                     type='button'
//                     onClick={() => {
//                       handleCreate()
//                       setShowModalCreate(false)
//                     }}
//                     disabled={selectedProduct.productTypeId == 0 ? true : false}
//                   >
//                     Create Product
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
//         </>
//       ) : null}
//     </>
//   )
// }
//
// export default ModalCreateProduct
