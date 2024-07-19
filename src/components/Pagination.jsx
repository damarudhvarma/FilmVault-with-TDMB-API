import React from 'react'

const Pagination = ({nextPage , prevPage, Page }) => {
  return (
    <div className='bg-gray-400 flex justify-center p-3 mt-8'>
      <div onClick={prevPage} className='px-4 '><i className="fa-solid fa-arrow-left "></i></div>
      <div className='font-bold'>{Page}</div>
      <div  onClick={nextPage} className='px-4 '><i className="fa-solid fa-arrow-right "></i></div>
    
    
    </div>
    
  )
}

export default Pagination