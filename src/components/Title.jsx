import React from 'react'
import assets from '../assets/assets'

function Title({ title, subTitle }) {
  return (
    <div className='flex flex-col items-center text-center gap-4'>
      <h2 className='text-3xl sm:text-5xl font-medium'>
      {title}
    </h2>
    <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>
    {subTitle}
        </p>
    </div>
  )
}

export default Title
