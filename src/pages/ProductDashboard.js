//rafc
import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component'
import { GET_ALL_PRODUCTS } from '../services/productService'
import ProductModal from '../components/ProductModal'


export const ProductDashboard = () => {

    const [products, setProducts] = useState([])
    const [filteredText, setFilteredText] = useState("")
    const [showProductModal, setShowProductModal] = useState(false)
    const columns = [
        {
            name: "ID",
            selector: row => row.id,
            width: "100px",

        },
        {
            name: "Image ",
            selector: row => {
                return (
                    <img className='img-fluid ' style={{ width: "100px" }}
                        src={row.images[0]} alt=" product Image " />
                )
            }
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
            selector: row => row.price,
            sortable: true
        }
    ]

    useEffect(() => {

        GET_ALL_PRODUCTS().then(
            response => {
                setProducts(response)
            }
        ).catch(error => console.log("Error is : ", error))

    }, [])
    let filterdProducts = products.filter(product =>
        product.title.toLowerCase().includes(filteredText.toLowerCase())
    )
    return (
        <div className='container mt-5 bg-warning'>

            <ProductModal showProduct={showProductModal} />
            <div className="d-flex justify-content-between">

                {/* <div className="productInfo bg-success">
                    <p>Product Information Section </p>
                </div> */}
                <div className="data-table col-12 bg-warning">
                    <DataTable
                        className='table table-striped table-hover w-100'
                        subHeader={true}
                        pointerOnHover={true}
                        selectableRowsHighlight={true}
                        highlightOnHover={true}
                        pagination={true}
                        columns={columns}
                        subHeaderComponent={
                            <div className='d-flex w-100  justify-content-between'>
                                <button className='btn btn-primary'
                                    onClick={() => setShowProductModal(true)}
                                > Add Product </button>
                                <input className=''
                                    onChange={(e) => {
                                        setFilteredText(e.target.value)

                                    }}
                                    type="text" name="" id="" />



                            </div>
                        }

                        data={filterdProducts} />

                </div>
            </div>

        </div>
    )
}