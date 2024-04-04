import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

export default function Search({cart , setCart}) {
  let {term}=useParams()
  const [firstData, setfirstData] = useState([])


    useEffect(() => {
      let firstData=()=>{
        let data=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
        setfirstData(data)
      }
      firstData()
    }, [term])
    
  return (
    <div>
        <Product cart={cart} setCart={setCart}  items={firstData}/>
    </div>
  )
}
