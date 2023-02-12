import React from 'react'
import './adminproductstyle.css'
import prod from './product.png'

const AdminProductDetail = () => {
  return (
    <div className='productsection'>

        <div className='productbox' >
            <div className='productdetail'>
                 <img src={prod} alt='' /> </div>
            <div> 
            <h4> Product Name</h4>
            <h6> Product Unit </h6>
            </div>
            <div> <h5> Price </h5> </div>
        </div>

        <div className='productbox' >
            <div className='productdetail'>
                 <img src={prod} alt='' /> </div>
            <div> 
            <h4> Product Name</h4>
            <h6> Product Unit </h6>
            </div>
            <div> <h5> Price </h5> </div>
        </div>
        <div className='productbox' >
            <div className='productdetail'>
                 <img src={prod} alt='' /> </div>
            <div> 
            <h4> Product Name</h4>
            <h6> Product Unit </h6>
            </div>
            <div> <h5> Price </h5> </div>
        </div>
        <div className='productbox' >
            <div className='productdetail'>
                 <img src={prod} alt='' /> </div>
            <div> 
            <h4> Product Name</h4>
            <h6> Product Unit </h6>
            </div>
            <div> <h5> Price </h5> </div>
        </div>
        <div className='productbox' >
            <div className='productdetail'>
                 <img src={prod} alt='' /> </div>
            <div> 
            <h4> Product Name</h4>
            <h6> Product Unit </h6>
            </div>
            <div> <h5> Price </h5> </div>
        </div>

      
    </div>
  )
}

export default AdminProductDetail
