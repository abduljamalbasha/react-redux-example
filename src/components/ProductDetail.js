import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, fetchProduct } from "../redux/action/productAction";

const ProductDetails= () =>{

const product = useSelector((state) => state.product) 

const {productId} = useParams()
console.log("prodcutId,", productId)
const dispatch = useDispatch()


useEffect(()=>{
    if(productId && productId !== "") dispatch(fetchProduct(productId))
    return () =>{
        dispatch(removeSelectedProduct())
    }
},[productId])

const { title, image, price, category, description}=  product
return(

    <div className="ui grid container">
       {Object.keys(product).length === 0 ? 
       
    <div>Loading .....</div> :
        <div className="ui placeholder segment">
            <div className="Image" >
                <img src={image} alt={title} />
            </div>
            <div className="title" >
            <span>{title}</span>
            </div>
            <div className="price" >
            <span>{price}</span>
            </div>
            <div className="category" >
            <span>{category}</span>
            </div>
            <div>
                {description}
            </div>
        </div>
    }
    </div>
)
}

export default ProductDetails