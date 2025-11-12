import React from 'react'
import { FaStar } from "react-icons/fa6";

const SingelProductCard = () => {
  return (
    <>
    <div className='w-[309px]'>
        {/* ----- image */}
        <div className='w-[320px] h-[360px] bg-primary overflow-hidden'></div>

        {/* ------ text */}
        <div className='flex justify-between items-center mt-[20px]'>
        <h2 className='text-base font-medium font-poppins text-[#111827]'>Black Automatic Watch</h2>
        <h2 className='text-base font-medium font-poppins text-[#111827]'>$ 120</h2>

        </div>
        {/* ------ text */}
        <div className='flex justify-between items-center '>
        <h2 className='text-base font-normal font-poppins text-secendary'>Black Automatic Watch</h2>
        <h2 className='text-base font-normal font-poppins text-secendary'>$ 120</h2>
        </div>
        <div className='flex gap-1 mt-[15px]'>
            <FaStar className='text-xl text-[#FBBF24]'/>
        <h2 className='text-base font-normal font-poppins text-secendary'>4.5</h2>

        </div>
    </div>
      
    </>
  )
}

export default SingelProductCard
