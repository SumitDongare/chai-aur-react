import React from 'react'

function container({children}) {
  return (
    <div className='w-full max-w-xl mx-auto px-4'>
        {children}
    </div>
  )
}

export default container
