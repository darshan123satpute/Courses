import React from 'react'
import Card from './Card';

const Cards = ({data,visilec}) => {

let aa=Object.values(data).flat()


let bb=data[visilec]

  return (
    <div className='flex items-center justify-center flex-row flex-wrap gap-4 ml-30 mb-3 mr-30'>
      {
       visilec=="All" ?  aa.map((card1)=>{
          return <Card  {...card1} ></Card>
        }) : bb.map((card1)=>{
          return <Card  {...card1} ></Card>
        })
      }
    </div>
  )
}

export default Cards
