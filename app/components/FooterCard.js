import React from 'react'

function FooterCard({title, subtitile, image}) {
  return (
    <div className=" flex gap-2 items-center ">
        <img 
        loading='lazy'  
         src={image}
         className='w-10 h-10  object-contain '
         />
         <div className='ml-3'>
            <h5 className='text-lg mb-1 px-2 font-bold'>{title} </h5>
            <p className='text-sm'>{subtitile}</p>
         </div>
    </div>
  )
}

export default FooterCard