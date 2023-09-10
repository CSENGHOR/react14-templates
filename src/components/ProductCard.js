import React from "react";
import "../styles/productCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { handleLongText } from "../utils/helper";


const ProductCard = ({ productData }) => {

  let navigate = useNavigate();
  return (
    <>
      <div className="product-card p-0">
        <div className="image-wrapper  ">
          <img
            className="img-fluid  product-image"
            src={productData.images[0]}
            onError={({currentTarget}) => {
              currentTarget.onerror = null; // prevent infinite loop
              currentTarget.src = "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"
            }}
            alt="product  image "
          />
        </div>


        <div className="content px-3 pt-2 position-relative pb-3">
          <FontAwesomeIcon
            onClick={()=> {
              navigate(`/products/${productData.id}`)
            }}
            style={{ cursor: "pointer" }}
            className="read-more   p-3 m-1 rounded-circle  position-absolute  "
            icon={faBookOpen}
            size="2x"
          />

          <h4>
            {handleLongText(productData.title, 14)}
          </h4>
          <p  >
            {handleLongText(productData.description, 60)}
          </p>

          <h3> ${productData.price} </h3>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
