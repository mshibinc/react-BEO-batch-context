import React from 'react'
import './cartitm.css'
export default function CartItem() {
    return (
        <div className="product-box">
            <img src="https://adistore.by/wp-content/uploads/2022/06/8a31a58d20f4410683d3ac8200d45ec1_9366.png" alt="Aeroready shirt" className="product-img" />
            <h2 className="product-title">Aeroready shirt</h2>
            <span className="price">$25</span>
            <i className='bx bx-shopping-bag add-cart'></i>
        </div>
    )
}
