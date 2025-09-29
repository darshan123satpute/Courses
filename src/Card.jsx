  import React, { useState } from 'react'
 import { FcLikePlaceholder } from "react-icons/fc";
  import { FcLike } from "react-icons/fc";
  import {toast } from 'react-toastify';
  const Card = ({id,description,image,title}) => {
    const [click,setclick]=useState(false)

    let des= `${description.substring(0,150)}...`

    function clickhandel(){
      setclick(!click)
      console.log(click);

      click? toast.warning("like Removed") :toast.success("Liked Course")
      
    }
    return (
      <div className='w-2xs h-[380px] flex flex-col bg-gray-800 relative'>
        <div>
          <img src={image.url} className='h-47 w-73' />
        </div>
        
        <div className='font-bold text-white ml-3 mt-2'>
          {title}
        </div>
 
        <div className='absolute left-60 top-40'>
          <button className='bg-white p-1.5 rounded-full cursor-pointer' onClick={clickhandel}>
           {
            click ? <FcLike className='size-[22px]'></FcLike>: <FcLikePlaceholder className='size-[22px]' />
           }
          </button>
        </div>

        <div className='text-white m-3 font-semibold '>
          {des}
        </div>
      </div>
    )
  }

  export default Card
