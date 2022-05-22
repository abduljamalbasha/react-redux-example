import React, {useEffect} from "react";
import ProductCard from "./ProductCard";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/productAction";

const ProductListing = () =>{

    const products= useSelector((state) => state)
    const dipatch = useDispatch();
 const fetchProducts = async () =>{
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err)=>{ console("Fetch Error:", err)})
    console.log('response:',response.data)
    dipatch(setProducts(response.data))
 }   

 useEffect(()=>{
    fetchProducts()

 },[])

console.log("products:",products)
return(
    <div className="">
       <ProductCard />
    </div>
)
}

export default ProductListing