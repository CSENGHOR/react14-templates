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

        let filteredProduct = data.
          filter(
            (p) => p.category.name.toLowerCase() === "plants"
          )


        setProducts(filteredProduct)
        setIsLoading(false)

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
                products.length === 0 ?
                  (
                    <>
                      <h1 className='text-center'> There is no Product to show </h1>
                    </>
                  ) :
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