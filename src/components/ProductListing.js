import React, {useEffect} from "react";
import ProductCard from "./ProductCard";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/action/productAction";

const ProductListing = () =>{
 
   const dipatch = useDispatch();


 useEffect(()=>{
   const fetchProducts = async () =>{
      const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err)=>{ console("Fetch Error:", err)})
      console.log('response:',response.data)
      dipatch(setProducts(response.data))
   }   
    fetchProducts()
 },[])

return(
    <div className="">
       <ProductCard />
    </div>
)
}

export default ProductListing