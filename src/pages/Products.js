import React, { useEffect, useState } from 'react'
import { GET_ALL_PRODUCTS } from '../services/productService';
import ProductCard from '../components/ProductCard';
import PlaceholderCard from '../components/PlaceholderCard';
import ReactPaginate from 'react-paginate';

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const itemsPerPage = 8;

  const startIndex = currentPage * itemsPerPage;// 0 * 8 = 0
  const endIndex = startIndex + itemsPerPage; // 0 + 8 = 8

  const subset = products.slice(startIndex, endIndex);

  const handlePageChange = ( selectedPage) => {
    setCurrentPage(selectedPage.selected);
   
  }


  useEffect(() => {
    // get product data 
    GET_ALL_PRODUCTS().then(
      data => {
        console.log("Data is : ", data)

        let filteredProduct = data

        // .
        //   filter(
        //     (p) => p.category.name.toLowerCase() === "plants"
        //   )

        setProducts(filteredProduct.sort((a, b) => b.id - a.id))
        setTotalPages(Math.ceil(filteredProduct.length / itemsPerPage))
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
                  <>{
                    subset.map(
                      product => {
                        return (
                          <div className="col-3">
                            <ProductCard productData={product} />

                          </div>
                        )
                      }
                    )
                  }
               
                    <div className="d-flex justify-content-center fixed-bottom bg-light py-3">
                      <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'} />
                    </div>


                  </>
              }
            </>
        }


      </div>
    </div>
  )
}

export default Products