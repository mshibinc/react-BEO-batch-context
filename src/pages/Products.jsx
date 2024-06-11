import React, { useEffect } from 'react'
import axiosConfig from '../utils/axiosFetch'

export default function Products() {
    useEffect(()=>{
        getProducts();
    },[])
    const getProducts =()=>{
        axiosConfig.get('/objects').then(res=>{
            console.log(res);
        })
    }
  return (
    <div>Products</div>
  )
}
