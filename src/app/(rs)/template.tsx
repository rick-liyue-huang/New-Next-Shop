import React from 'react'

const RSTemplate = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='animate-appear'>
      {children}
    </div>
  )
}

export default RSTemplate