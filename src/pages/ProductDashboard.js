//rafc
import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component'
import { GET_ALL_PRODUCTS } from '../services/productService'
import ProductModal from '../components/ProductModal'
import PreviewCard from '../components/PreviewCard'

const ProductDashBoard = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    let refreshStatus = false

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
                    <img className='img-fluid '
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"
    
                    }}
                    style={{ width: "100px" }}
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

    const handleStateChange = (status)=>{
        console.log("Value of Status is : ", status)
        refreshStatus = status
        console.log("************ Refresh Status(from Preview) : ",refreshStatus)
    }
     
    useEffect(() => {
        GET_ALL_PRODUCTS().then(
            response => {

                let sortedProducts =
                    response.sort((a, b) => b.id - a.id)

                setProducts(sortedProducts)
                setSelectedProduct(sortedProducts[0])

            }
        ).catch(error => console.log("Error is : ", error))

    }, [!refreshStatus])


    let filterdProducts = products.filter(product =>
        product.title.toLowerCase().includes(filteredText.toLowerCase())
    )

    const handleRowClicked = (row) => {
        setSelectedProduct(row)
    }


  
    return (
        <div className='container mt-5  '>

            <ProductModal showProduct={showProductModal} />
            <div className="d-flex justify-content-between">

                <div className='col-3 mx-auto mt-5'>
                    <PreviewCard 
                    product={selectedProduct}
                    onStateChange = {handleStateChange}
                    />
                </div>
                <div className="data-table col-8  ">
                    <DataTable
                        className='table table-striped table-hover w-100'
                        subHeader={true}
                        pointerOnHover={true}
                        selectableRowsHighlight={true}
                        highlightOnHover={true}
                        pagination={true}
                        columns={columns}
                        responsive={true}
                        paginationPerPage={5}
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

                        data={filterdProducts}
                        onRowClicked={handleRowClicked}

                    />

                </div>
            </div>

        </div>
    )
}

export default ProductDashBoard