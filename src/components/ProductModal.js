import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faTrash, faWarning } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple, faCrow, faGear, faTreeCity, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    FaBox,
    FaCross,
    FaEnvelope,
    FaFacebook,
    FaInfo,
    FaKey,
    FaMoneyBill,
    FaSearch,
    FaTrash,
    FaUser,
    FaXbox,
  } from "react-icons/fa";
const ProductModal = ({showProduct,handleCloseProductForm}) => {
    return (
        <Modal size="xl" show={showProduct} onHide={handleCloseProductForm}


        >
            <Modal.Header closeButton={false}>
                <Modal.Title className="m-auto"> Add New Product </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="img-side w-50">
                        <label htmlFor="file-input">
                            <img
                                id="preview-image"
                                className="img-fluid img-thumbnail"
                                width="400px "
                                src={
                                    
                                        "https://cdn3d.iconscout.com/3d/premium/thumb/image-6073772-4996992.png"
                                }
                                alt="Profile Picture"
                            />


                        </label>

                        {/* here we listing a smaller images  */}
                        <div className="more-images">
                            <div className="d-flex justify-content-center align-items-center">
                               


                                     
                                            <div className="d-flex justify-content-center align-items-center position-relative">
                                                <img
                                                   
                                                    className="img-fluid img-thumbnail"
                                                    width="50px "
                                                    src={"https://cdn3d.iconscout.com/3d/premium/thumb/image-6073772-4996992.png"}
                                                    alt="Profile Picture"
                                                />
                                                <div

                                                    className=" position-absolute"
                                                    style={{ top: '-15px', right: '-5px' }}>


                                                    <button className="btn btn-danger btn-sm   rounded-circle"  >
                                                        <FontAwesomeIcon icon={faBan} />
                                                    </button>
                                                </div>
                                            </div>
                                        
                                        

                                
                            </div>
                        </div>
                        {/* d-none */}
                        <input
                            className="form-control d-none "
                            type="file"
                            name=""
                            
                            id="file-input"
                            multiple
                        />
                    </div>

                    <div className="d-flex w-100   ms-3 flex-column">

                        <div className="d-flex mb-3   align-items-center justify-content-between">
                            <div class="form-floating  ">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Jonh Doe"
                                    

                                />
                                <label for="floatingInput" className="input-label">
                                    <div className="d-flex align-items-center">
                                        <FaBox />
                                        <span className="ms-2"> Produce Title  </span>
                                    </div>
                                </label>
                            </div>
                            <div class="form-floating  ">
                                <input
                                    type="number"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Jonh Doe"
                                 

                                />
                                <label for="floatingInput" className="input-label">
                                    <div className="d-flex align-items-center">
                                        <FaMoneyBill />
                                        <span className="ms-2"> Produce Price  </span>
                                    </div>
                                </label>
                            </div>


                        </div>


                        <div class="form-floating mb-3  ">
                            <textarea
                                cols={3}
                                type="text"
                                class="form-control"
                                id="floatingInput"
                              
                                placeholder="name@example.com"
                                style={{ height: "170px" }}

                            ></textarea>
                            <label for="floatingInput" className="input-label">
                                <div className="d-flex align-items-center">
                                    <FaInfo />
                                    <span className="ms-2"> Product Description </span>
                                </div>
                            </label>
                        </div>





                        <Button
                            variant={"success"}
                            className="w-100 mt-2 mb-5   "
                             

                        >


                            Create Product


                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ProductModal