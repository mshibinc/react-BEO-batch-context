import React, { useEffect, useState } from 'react'
import axiosConfig from '../utils/axiosFetch'

export default function Products() {
    const [products, setProducts] = useState([])
    const [productsDetails, setProductsDetails] = useState(null)
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
    const showProduct = (val) => {
        axiosConfig.get(`/objects?id=${val}`).then(res => {
            setProductsDetails(...res);
        }).catch((err) => {
            alert('err')
        })
    }
    return (
        <div>
            {productsDetails!=null&&<div>
                <p>{productsDetails.name}</p>
                <p>{productsDetails?.data?.capacity}</p>
                <p>{productsDetails?.data?.color}</p>
            </div>}
            {products.map((itm, i) => (
                <div>
                    <h4>{itm.name}</h4>
                    <button onClick={() => showProduct(itm.id)}>Show Details</button>
                </div>
            ))}
        </div>
    )
}
