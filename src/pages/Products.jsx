import React, { useEffect, useState } from 'react'
import axiosConfig from '../utils/axiosFetch'
import { Link } from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = () => {
        axiosConfig.get('/objects').then(res => {
            setProducts(res);
        }).catch((err) => {
            alert('err')
        })
    }
    return (
        <div>
            
            {products.map((itm, i) => (
                <div key={itm.id}>
                    <h4>{itm.name}</h4>
                    <Link to={`/products/${itm.id}`}>
                    Show Details
                    </Link>
                </div>
            ))}
        </div>
    )
}
