import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ProductDetails({ cart, setCart }) {
    let { id } = useParams()

    const [product, setproduct] = useState({})

    const [related, setRelated] = useState([])

    useEffect(() => {
        let filterdata = items.filter((pro) => pro.id == id)
        console.log(filterdata)
        setproduct(filterdata[0])


        let relatedProuduct = items.filter((p) => p.category === product.category)
        console.log(relatedProuduct)
        setRelated(relatedProuduct)

    }, [id, product.category])


    let addCart = (id, price, title, description, imgSrc) => {
        let obj = {
            id, price, title, description, imgSrc
        }
        setCart([...cart, obj])
        console.log(cart)


        toast.success('Item added on cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }


    return (
        <div>

            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="container con">

                <img src={product.imgSrc} className='w-50 ' alt="..." />



                <div className="">
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>

                    <button className="btn btn-primary">{product.price} ₹</button>
                    <button onClick={() => addCart(product.id, product.price, product.title, product.description, product.imgSrc)} className='btn btn-warning mx-3'>add to cart</button>
                </div>
            </div>


            <h1 className='text-center'> related prouduct</h1>
            <Product cart={cart} setCart={setCart} items={related} />

        </div>
    )
}
