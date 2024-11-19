import React from 'react'

export const Header = () => {
  return (
    <>
      {/* Hedar Details */}
      <div className='bg-gray-300 text-center text-gray-600 text p-4 '>
      <h1 className='text-3xl font-bold'>Responsive UI Practice</h1>
      <p className='sm:w-[700px] mx-auto'>
        A React.js project with Tailwind CSS for practicing responsive design
        techniques, including layouts, grids, and components adaptable to all
        screen sizes.
      </p>
      </div>
    </>
  )
}

export default Header
