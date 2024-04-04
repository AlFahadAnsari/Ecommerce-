import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Product({ items, cart, setCart }) {

   let addCart = (id, price, title, description, imgSrc)=>{
    let obj ={
        id, price, title, description, imgSrc
    }
    setCart([...cart,obj])
    console.log(cart)

    
    toast.success('Item added on cart', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

   }



    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="container" id='cards'>
                <div className="row">
                    {items.map((e) => {
                        return (
                            <>

                                <div key={e.id} className="col col-lg-4 my-3">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <Link to={`/prouduct/${e.id}`}>


                                            <img src={e.imgSrc} className="card-img-top" alt="..." />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{e.title}</h5>
                                            <p className="card-text">{e.description}</p>
                                            <button className='btn btn-primary'>{e.price} ₹</button>
                                            <button  onClick={() => addCart(e.id, e.price, e.title, e.description, e.imgSrc)} className='btn btn-warning mx-3'>add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div >
            </div>
        </>
    )
}
