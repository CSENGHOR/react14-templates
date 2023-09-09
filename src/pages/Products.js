import React, { useEffect, useState } from 'react'
import { GET_ALL_PRODUCTS } from '../services/productService';
import ProductCard from '../components/ProductCard';
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
    <div className='container '>
      <div className="row ">
        {
          products.map(
            product => {
              return (
                <div className="col-4">
                  <ProductCard productData = {product} />
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Products