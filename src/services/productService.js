// create this inside the services folder:

import { api } from "../utils/api"

// get all the products from the api
export const GET_ALL_PRODUCTS = async () => {
    const response = await api.get("products")
    return response.data
}