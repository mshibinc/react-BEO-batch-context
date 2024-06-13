import React from 'react'
import './cart.css';
import CartItem from './components/cartitm/CartItem';
export default function Cart() {
  return (
    <section className="shop container">
		<h2 className="section-title">Shop Product</h2>

		<div className="shop-content">
			<CartItem/>
			
		</div>

	</section>
  )
}
