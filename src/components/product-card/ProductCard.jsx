import React from 'react'
import './product-card.css'

function ProductCard(props) {

    const {title , imgUrl, price } = props.item
  return (
    <div className="single__product">
    <div className="product__img">
      <img src={imgUrl} alt="" className="w-100 product"/>
    </div>

    <div className="product__content">
      <div className="rating text-center">
        <span>
          <i class="ri-star-s-fill"></i>
        </span>
        <span>
          <i class="ri-star-s-fill"></i>
        </span>
        <span>
          <i class="ri-star-s-fill"></i>
        </span>
        <span>
          <i class="ri-star-s-fill"></i>
        </span>
        <span>
          <i class="ri-star-s-fill"></i>
        </span>
      </div>

      <h6>{title}</h6>

      <div className=" d-flex align-items-center justify-content-between">
        <span className="price d-flex align-items-center">
          {" "}
          Qiymət : &nbsp; <span className='price_'>{price}</span> Azn
        </span>
        {/* <span className='shopping__icon'>
          <i class="ri-shopping-cart-line"></i>
        </span> */}
      </div>
    </div>
  </div>
  )
}

export default ProductCard