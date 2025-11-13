import React, { useState } from 'react'

const ProductDeatilsHead = () => {
  const [changText , setchangText] = useState('https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?semt=ais_hybrid&w=740&q=80')
  

  const subImages = [
  {  imageLInk:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVTWL4dqk9ZokaiRQe0kdV3_dNvkB7A3xTw&s'},
  {  imageLInk:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHEdcxra_Xwz4zG11nan36oFQVR1KwKaA8z8f2VsWVwz1hccDgZiPHvQt9X-gdAipZoU&usqp=CAU'},
  {  imageLInk:'https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg '},
  ]

  return (
    <>
      <div className='flex flex-wrap'>
        {/* --------------- product iamges */}
        <div className='flex gap-[24px]'>
          
          {/* ----- image button col */}
          <div>

        {
          subImages.map((item)=>(

            <button onClick={()=>setchangText(item.imageLInk)} className=' overflow-hidden w-[140px] h-[157px] rounded-[16px] bg-gray-200 block mt-5'>
              <img className='w-full' src={item.imageLInk} alt="" />
            </button>
          ))
        }


 


          </div>

          {/* ------ product big image  */}
          <div className={`w-full lg:w-[640px] h-[678px] bg-gray-200 overflow-hidden rounded-[16px]`}>
            <img className='w-full' src={changText} alt="" />
          </div>
        </div>
      
      </div>
    
    </>
  )
}

export default ProductDeatilsHead