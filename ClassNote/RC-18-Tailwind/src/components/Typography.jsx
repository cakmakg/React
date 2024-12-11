import React from 'react'

const Typography = () => {
  return (
    <div>
          <h2 className='text-2xl ' >Tailwind css</h2>
       <h2 className='text-3xl' >Tailwind css</h2>
       <h2 className='text-5xl' >Tailwind css</h2>
       {/* standart tailwind ölçüleri dışında kullanmak için text-[25px], text-[1rem] */}
       <h2 className='text-[25px]' >Tailwind css</h2>
    </div>
  )
}

export default Typography