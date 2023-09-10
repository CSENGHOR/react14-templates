//rafc
import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component'
import { GET_ALL_PRODUCTS } from '../services/productService'


export const ProductDashboard = () => {
    const [products, setProducts] = useState([])
    const columns = [
        {
            name: "ID",
            selector: row => row.id
        },
        {
            name: "Image ",
            selector: row => row.images[0]
        },
        {
            name: "Title ",
            selector: row => row.title
        }
        ,
        {
            name: "Description ",
            selector: row => row.description
        },
        {
            name: "Price",
            selector: row => row.price
        }
    ]

    useEffect(() => {

        GET_ALL_PRODUCTS().then(
            response => {
                setProducts(response)
            }
        ).catch(error => console.log("Error is : ", error))

    }, [])
    return (
        <div className='container mt-5 bg-warning'>
            <div className="d-flex justify-content-between">

                {/* <div className="productInfo bg-success">
                    <p>Product Information Section </p>
                </div> */}

                <div className="data-table col-12 bg-warning">
                    <DataTable
                        className='bg-light w-100'
                        columns={columns}
                        data={products}
                    />
                </div>
            </div>

        </div>
    )

}

