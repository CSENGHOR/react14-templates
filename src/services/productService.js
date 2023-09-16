// create this inside the services folder:

import { api } from "../utils/api"

// get all the products from the api
export const GET_ALL_PRODUCTS = async () => {
    const response = await api.get("products")
    return response.data
}

// get product by id 
export const GET_PRODUCT_BY_ID = async (id) => {
    const response = await api.get(`products/${id}`)
    return response.data
}

// delete product by id
export const DELETE_PRODUCT_BY_ID = async (id) => {
    const response = await api.delete(`products/${id}`)
    return response.data
}