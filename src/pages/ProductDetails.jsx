import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axiosConfig from '../utils/axiosFetch';
export default function ProductDetails() {
    const { id } = useParams();
    const [productsDetails, setProductsDetails] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = () => {
        axiosConfig.get(`/objects?id=${id}`).then(res => {
            setProductsDetails(...res);
            setLoading(false)
        }).catch((err) => {
            alert('err')
        })
    }
    return (
        <div className='container'>
            {isLoading ? <p>Loading....</p> : <>{productsDetails != null && <div>
                <p className="product-names">{productsDetails.name}</p>
                {productsDetails?.data?.capacity && <p>capacity:{productsDetails.data.capacity}</p>}
                {productsDetails?.data?.color && <p>color:{productsDetails.data.color}</p>}
            </div>}</>}

        </div>
    )
}
