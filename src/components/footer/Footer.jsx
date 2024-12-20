import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='grid sm:grid-cols-12 m-2 gap-2 grid-cols-1'>
        <div className='grid sm:col-span-3 bg-yellow-400 min-h-[200px] rounded-lg'>
        <div className='flex items-center justify-center'>
                <h1 className='text-white font-bold'>
                    Box 11
                </h1>
            </div>
        </div>
        <div className='grid sm:col-span-9 bg-yellow-500 min-h-[200px] rounded-lg'>
            <div className='flex items-center justify-center'>
                <h1 className='text-white font-bold'>
                    Box 12
                </h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer