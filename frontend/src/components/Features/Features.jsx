import React from 'react'

const Features = () => {
  return (
    <div className='flex justify-center flex-col items-center mt-10'>
        <h3 className='text-white text-xl font-bold'>What you get</h3>
        <div className='flex max-w-[800px] justify-center mt-5 gap-4'>
            <div className='bg-gray-500 text-white rounded-4xl px-4 py-2'>Candidate resume rating</div>
            <div className='bg-gray-500 text-white rounded-4xl px-4 py-2'>AI Based Reasoning</div>
            <div className='bg-gray-500 text-white rounded-4xl px-4 py-2'>Downloadable CSV</div>
            <div className='bg-gray-500 text-white rounded-4xl px-4 py-2'>Smart Job Matching</div>

        </div>
    </div>
  )
}

export default Features