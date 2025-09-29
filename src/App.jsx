import React, { useEffect, useState } from 'react'
  import { ToastContainer, toast } from 'react-toastify';
import {filterData,apiUrl} from "./data"
import Filter from './Filter';
import Cards from './Cards';
import Spinner from './Spinner';

const App = () => {
  const [isload,setload]=useState(false)
 const [data,setdata]=useState(" ")
useEffect(()=>{
  let receive=async()=>{
  let data1=await fetch(apiUrl)
  let data2=await data1.json()
  let data3=data2.data
  setload(true)
 setdata(data3)
    
}
receive()
},[])


const [visilec,setvisiblec]=useState(filterData[0].title)
    function clickhandel(title){
        setvisiblec(title)
      }

  return (
    <div>
      <div className='text-center text-2xl font-bold  text-white w-full bg-slate-900 p-1'>Courses</div>
      
      <Filter filterData={filterData} clickhandel={clickhandel}/> 
       <div>
        {
          isload ?  <Cards data={data} visilec={visilec} setvisiblec={setvisiblec}/> :  <Spinner isload={isload}/>
        }

       </div>
     
       <ToastContainer />
      
    </div>
  )
}

export default App
