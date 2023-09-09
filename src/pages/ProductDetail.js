import React, { useEffect, useState } from 'react'

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
        <div>
            <h1> Product Details {id} </h1>

        </div>
    )
}

export default ProductDetail