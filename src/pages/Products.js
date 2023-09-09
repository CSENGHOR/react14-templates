import React, { useEffect, useState } from 'react'
import { GET_ALL_PRODUCTS } from '../services/productService';
import ProductCard from '../components/ProductCard';
import PlaceholderCard from '../components/PlaceholderCard';
const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // get product data 
    GET_ALL_PRODUCTS().then(
      data => {
        console.log("Data is : ", data)
        setProducts(data)
        // setIsLoading(false)

      }
    ).catch(
      error => { console.log("Error is : ", error) }
    )
  }, []);



  const placeholderCards = (number) => {
    let placeholders = [];
    for (var i = 0; i < number; i++) {
      placeholders.push(
        <div className="col-3">
          <PlaceholderCard />
        </div>
      )
    }
    return placeholders;
  }


  return (
    <div className='container '>
      <div className="row ">
        {
          isLoading ?
            (
              <>
                {placeholderCards(8)}
              </>

            ) :
            <>
              {
                products.map(
                  product => {
                    return (
                      <div className="col-3">
                        <ProductCard productData={product} />
                      </div>
                    )
                  }
                )
              }
            </>
        }


      </div>
    </div>
  )
}

export default Products