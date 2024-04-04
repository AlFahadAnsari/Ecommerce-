import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({cart , setCart}) {
    return (
        <>
       

            <div className="container text-center my-3"style={{width:"53%"}}   >
                {
                
                cart.length==0 ?(
                    <>
                    <div className='text-center'>
                      <h1>Your Cart is Empty</h1>
                      <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
                    </div>
                    </>
                            ):
                
                cart.map((e) => {
                    return (
                        <>
                            <div className="card my-3" style={{width: "770px"}}>
                                <img src={e.imgSrc}   className="img-fluid rounded-start"  alt="..." id='cartimg'/>
                                    <div className="card-body"  >
                                        <h5 className="card-title">{e.title}</h5>
                                        <p className="card-text">{e.description}</p>
                                        <button className='btn btn-primary'>{e.price} ₹</button>
                                        <button className='btn btn-warning mx-3'>Buy now</button>
                                    </div>
                            </div>
                        </>
                    )
                })}
            </div>




            {
        cart.length!=0 && (
          <div className="container text-center my-5" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
  
          }}>
            <button className='btn btn-warning mx-5 '>CheckOut</button>
            <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
          </div>
        )
      }

        </>
    )
}
