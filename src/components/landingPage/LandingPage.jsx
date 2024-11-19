import React from 'react'

export const LandingPage = () => {
  return (
    <>
    <div className='grid sm:grid-cols-3 m-2 gap-2'>
        {/* 1st Box Element */}
        <div className='min-h-[100px] rounded-lg bg-orange-400'>
            <div>
                <h1 className='text-center pt-1'>Box 01 Header</h1>
                <p className='text-[12px] text-center p-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                    dolorum fugiat. Adipisci illum vel praesentium reiciendis 
                    laborum atque voluptas accusamus ipsam,</p>
            </div>
        </div>

        {/* 2nd Box Element */}
        <div className='min-h-[100px] rounded-lg bg-orange-500'>
        <div>
                <h1 className='text-center pt-1'>Box 02 Header</h1>
                <p className='text-[12px] text-center p-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                    dolorum fugiat. Adipisci illum vel praesentium reiciendis 
                    laborum atque voluptas accusamus ipsam,</p>
            </div>
        </div>

        {/* 3rd Box Element */}
        <div className='min-h-[100px] rounded-lg bg-orange-600'>
        <div>
                <h1 className='text-center pt-1'>Box 03 Header</h1>
                <p className='text-[12px] text-center p-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                    dolorum fugiat. Adipisci illum vel praesentium reiciendis 
                    laborum atque voluptas accusamus ipsam,</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage;
