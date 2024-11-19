import React from 'react'
import Img01 from '../../assets/landingPage/img01.svg'
import Img02 from '../../assets/landingPage/img02.svg'

export const LandingPage = () => {
  return (
    <>
    {/* 1st section */}
    <div className='grid sm:grid-cols-3 m-2 gap-2'>
        {/* 1st Box Element */}
        <div className='min-h-[100px] rounded-lg bg-orange-400 flex items-center justify-center'>
            <div>
                <h1 className=' font-bold text-white'>Box 01</h1>
            </div>
        </div>

        {/* 2nd Box Element */}
        <div className='min-h-[100px] rounded-lg bg-orange-500 flex items-center justify-center'>
            <div>
                <h1 className=' font-bold text-white'>Box 02</h1>
            </div>
        </div>

        {/* 3rd Box Element */}
        <div className='min-h-[100px] rounded-lg bg-orange-600 flex items-center justify-center'>
            <div>
                <h1 className=' font-bold text-white'>Box 03</h1>
            </div>
        </div>
    </div>

    {/* 2nd section */}

    <div className='grid md:grid-cols-4 m-2 gap-2 grid-cols-2'>
        <div className='bg-green-400 min-h-[200px] rounded-lg flex items-center justify-center'>
            <h1 className='text-white font-bold'>
                Box 04
            </h1>
        </div>

        <div className='bg-green-500 min-h-[200px] rounded-lg flex items-center justify-center'>
            <h1 className='text-white font-bold'>
                Box 05
            </h1>
        </div>

        <div className='bg-green-600 min-h-[200px] rounded-lg flex items-center justify-center'>
            <h1 className='text-white font-bold'>
                Box 06
            </h1>
        </div>

        <div className='bg-green-700 min-h-[200px] rounded-lg flex items-center justify-center'>
            <h1 className='text-white font-bold'>
                Box 07
            </h1>
        </div>

    </div>

    {/* 3rd section */}

    <div className='grid m-2 gap-2 sm:grid-cols-12 grid-cols-1'>
        <div className='bg-purple-400 rounded-lg sm:col-span-3 min-h-[600px] hidden sm:block sm:flex items-center justify-center'>
            <h1 className='text-white font-bold'>
                Box 07
            </h1>
        </div>
        <div className='bg-purple-500 rounded-lg sm:col-span-6 min-h-[600px] flex items-center justify-center'>
            <h1 className='text-white font-bold'>
                Box 07
            </h1>
        </div>
        <div className='bg-purple-600 rounded-lg sm:col-span-3 min-h-[600px] hidden sm:block sm:flex items-center justify-center'>
            <h1 className='text-white font-bold'>
                Box 07
            </h1>
        </div>
    </div>

    </>
  )
}

export default LandingPage;
