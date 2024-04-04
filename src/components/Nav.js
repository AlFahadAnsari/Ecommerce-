import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'



export default function Nav({ setdata , cart }) {
  let location =useLocation()

  let navi = useNavigate()

  const [search, setsearch] = useState('')

  let formHandle = (e) => {
    e.preventDefault()
    navi(`/search/${search}`)
    setsearch('')

  }

  let filterByCategory = (category) => {
    let element = items.filter((products) => products.category === category)
    // console.log(element)
    setdata(element)
  }
  let filterByPrice = (price) => {
    let ele = items.filter((product) => product.price >= price)
    setdata(ele)

  }


  return (
    <>


      <div className="navbar p-2">
        <div className="container-fluid" id='nav-div'>

          <Link to={'/'} className="navbar-brand text-white fs-3"><i className="fa fa-home" aria-hidden="true"></i></Link>

          <form className="search-bar" onSubmit={formHandle}>
            <input type="text" placeholder='search items' value={search} onChange={(e) => setsearch(e.target.value)} className='rounded-3 p-2 w-100' />
          </form>



          <Link to={'cart'} className="icon">

            <button type="button" className="btn btn-primary position-relative">
              <i className="fa-solid fa-cart-shopping text-white fs-3 mx-4">  </i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>



        </div>
      </div>




    {
      location.pathname == '/' &&(
        <div className="container-fluid" id='filters'>
        <div className="items">Filter by{"->"}</div>
        <div className="items" onClick={() => setdata(items)}>no filter</div>
        <div className="items" onClick={() => filterByCategory('mobiles')}>mobile</div>
        <div className="items" onClick={() => filterByCategory('laptops')}>laptop</div>
        <div className="items" onClick={() => filterByCategory('tablets')}>tablet</div>
        <div className="items" onClick={() => filterByPrice(29999)}>{">=29999"}</div>
        <div className="items" onClick={() => filterByPrice(49999)}>{">=49999"}</div>
        <div className="items" onClick={() => filterByPrice(69999)}>{">=69999"}</div>
        <div className="items" onClick={() => filterByPrice(89999)}>{">=89999"}</div>
      </div>
      )
    }

     

    </>
  )
}
