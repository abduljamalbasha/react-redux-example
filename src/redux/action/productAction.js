import fakestoreapi from "../../apis/fakeProducts";
import { ActionTypes } from "../constant/action-types";

export const fetchProducts = () =>  async (dispatch ) => {
        const response = await fakestoreapi.get('/products')
        dispatch({type:ActionTypes.FETCH_PRODUCT, payload: response.data})
    };

export const fetchProduct = (id) =>  async (dispatch ) => {
    const response = await fakestoreapi.get(`/products/${id}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCT, payload: response.data})
};

export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCT, 
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}