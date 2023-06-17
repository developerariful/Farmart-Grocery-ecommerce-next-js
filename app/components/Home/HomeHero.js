import React from 'react'
import { setBackgroundImg } from '../../utils/helper'

const HomeHero = () => {

  return (
    <section className='py-10' style={setBackgroundImg('/Images/hero-bg.jpg')}>
        <div className='container'>
            <div className='flex gap-8 flex-wrap'>
                {/* Hero left Banner */}
                <div className='flex-1 md:py-16 md:px-12 py-10 px-6 rounded-lg ' style={setBackgroundImg('/Images/hero.jpg')}>
               <div className='flex flex-col justify-between h-full'>
               <div>
               <h2 className='text-3xl font-bold text-title mb-6'>Active Summer With <br/> Juice Milk 300ml</h2>
                <p>New arrivals with naturre  fruits, juice <br/> milks, essential for summer</p>
               </div>
                <a href='/' className='btn-white  mt-14'> Shop Now </a>
               </div>
                </div>
                {/* Hero right Banner */}
                <div className='md:w-1/3 w-full md:py-16 md:px-12 py-10 px-6 rounded-lg bg-black' style={setBackgroundImg('/Images/hero-small.jpg' , {backgroundSize: 'unset', backgroundPosition: 'bottom right', backgroundColor: '#fac251'})} >
                    <div className='flex flex-col justify-between h-full'> 
                        <div>
                            <h2 className='text-3xl font-bold text-title mb-6'>20% SALE OFF   </h2>
                            <p>Synthetic seedsNet 2.0 OZ</p>
                        </div>
                <a href='/' className='btn-white  mt-14'> Shop Now </a>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHero