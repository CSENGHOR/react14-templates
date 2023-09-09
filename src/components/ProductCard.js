import React from "react";
import "../styles/productCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";


const ProductCard = ({ productData }) => {

  return (
    <>
      <div className="product-card p-0">
        <div className="image-wrapper  ">
          <img

            className="img-fluid  product-image"
            src={productData.images[0]}

            alt="product  image "
          />
        </div>


        <div className="content px-3 pt-2 position-relative pb-3">
          <FontAwesomeIcon

            style={{ cursor: "pointer" }}
            className="read-more   p-3 m-1 rounded-circle  position-absolute  "
            icon={faBookOpen}
            size="2x"
          />

          <h4>
            {productData.title}
          </h4>
          <p  >
            {productData.description}
          </p>

          <h3> ${productData.price} </h3>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
