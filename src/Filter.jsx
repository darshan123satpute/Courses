import React, { useState } from 'react'


const Filter = ({filterData,clickhandel}) => {

  return (
    <div className='flex gap-10 justify-center m-7 text-white font-semibold'>
      {
        filterData.map((but=>{
          return <button className='cursor-pointer bg-slate-900 a-auto p-1.5 rounded-[5px] hover:border-1' onClick={()=>clickhandel(but.title)}>{but.title}</button>
        }))
      }
     
    </div>  
    )
}

export default Filter
