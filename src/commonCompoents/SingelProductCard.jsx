import React from 'react'
import { FaStar } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { LuLayoutPanelLeft } from "react-icons/lu";

const SingelProductCard = ({productImage , title , category , mainPrice , rating , discoutPrice , detailsFun}) => {

  



  return (
    <>
    <div className='w-[309px]'>
        {/* ----- image */}
        <div className='w-[320px] h-[360px] bg-primary overflow-hidden  group relative'>
        <div className='flex flex-col gap-2 absolute top-3 right-[-35px] group-hover:right-2 duration-[.4s]'>
          <button className='p-2 rounded-full bg-black text-white w-fit active:scale-[1.1]'><BsCart/></button>
          <button onClick={detailsFun} className='p-2 rounded-full bg-black text-white w-fit active:scale-[1.1]'><LuLayoutPanelLeft/></button>
        </div>
          <img src={productImage} alt="product image" />
        </div>

        {/* ------ text */}
        <div className='flex justify-between items-center mt-[20px]'>
        <h2 className='text-base font-medium font-poppins text-[#111827]'>{title}</h2>
        <h2 className='text-base font-medium font-poppins text-[#111827]'>{discoutPrice}</h2>

        </div>
        {/* ------ text */}
        <div className='flex justify-between items-center '>
        <h2 className='text-base font-normal font-poppins text-secendary'>{category}</h2>
        <h2 className='text-base font-normal font-poppins text-secendary line-through  italic'>${mainPrice}</h2>
        </div>
        <div className='flex gap-1 mt-[15px]'>
            <FaStar className='text-xl text-[#FBBF24]'/>
        <h2 className='text-base font-normal font-poppins text-secendary'>{rating}</h2>

        </div>
    </div>
      
    </>
  )
}

export default SingelProductCard
