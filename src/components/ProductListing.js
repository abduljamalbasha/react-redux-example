import React, {useEffect} from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/action/productAction";

const ProductListing = () =>{
 
 const dispatch = useDispatch();
 useEffect(()=>{   
   dispatch(fetchProducts())
 },[])

return(
    <div className="">
       <ProductCard />
    </div>
)
}

export default ProductListing