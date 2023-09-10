import React, { useEffect, useState } from 'react'
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/productDetails.css";
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_ID } from '../services/productService'

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    let { id } = useParams()


    useEffect(() => {

        GET_PRODUCT_BY_ID(id).then(
            response => {
                console.log("Product By ID : ", response)
                setProduct(response)
            }
        ).catch(error => {
            console.log("ERROR GETTING PRODUCT : ", error)
        })
    }, [])

    

    return (
        <div className="container mt-3  flex-column    flex-lg-row d-flex details-product">
        <div className="slider-image col-md-12 col-lg-6 order-1 d-flex  justify-content-center flex-column align-items-center gap-3">
          {/* output images  */}
  
          <div className="image-wrapping position-relative   img-fluid"
            style={{ width: "500px", height: "600px", overflow: "hidden" }}
          >
            <img
              className="img-fluid rounded-3 
              position-absolute top-0 left-0 object-fit-cover"
              style={{ width: "100%", height: "100%" }}
              src={
                "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
              }
            />
          </div>
  
  
          <div className="d-flex gap-2 justify-content-center p-2 w-50">
         
              <img
                
                className="img-fluid w-25 object-fit-contain"
                src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}
              />
              <img
                
                className="img-fluid w-25 object-fit-contain"
                src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}
              />
              <img
                
                className="img-fluid w-25 object-fit-contain"
                src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}
              />
           
          </div>
        </div>
  
        <div className="text-side ms-5 order-md-2 mb-4">
          <h2> Plants </h2>
          <h1> Here is the product title </h1>
          <div className="stars d-flex gap-1 ">
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="orange" />
            <FontAwesomeIcon icon={faStar} color="gray" />
          </div>
          <p className="mt-3"> There is the product description</p>
  
          <div className="product-info">
            <h1>
              $89.00
            </h1>
            <button className="btn btn-success mt-4">
              <FontAwesomeIcon icon={faCartShopping} className="me-1" />
              Add Item
            </button>
          </div>
        </div>
      </div>
    )
}

export default ProductDetail