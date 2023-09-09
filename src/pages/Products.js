import React, { useEffect, useState } from 'react'
import { GET_ALL_PRODUCTS } from '../services/productService';

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    // get product data 
    GET_ALL_PRODUCTS().then(
      data => {
        console.log("Data is : ", data)
        setProducts(data)

      }
    ).catch(
      error => { console.log("Error is : ", error) }
    )
  }, []);
  return (
    <div> <h1> All Products </h1></div>
  )
}

export default Products